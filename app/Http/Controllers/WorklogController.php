<?php

namespace App\Http\Controllers;

use App\DataTable\WorklogDataTable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Worklog;
use App\Models\Project;
use App\Models\DailyReport;
use App\Models\MonthlyReport;

use Yajra\DataTables\DataTables;

class WorklogController extends AppBaseController
{
    public function index(Request $request)
    {
        // Logika untuk menampilkan daftar catatan kerja (worklog)
        $status = Worklog::distinct('status')->pluck('status', 'status');

        $idUser = Auth::user()->id;
        $project = Project::where('user_id', $idUser)->where('status','running')->pluck('name_project', 'id');

        if ($request->ajax()) {
            return DataTables::of((new WorklogDataTable())->get($request->only(['status', 'project'])))->make(true);
        }

        return view('pegawai.worklog.index', compact('status', 'project'));
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'deskripsi' => 'required',
            'project_id' => 'required',
            'status' => 'required',
            'tanggal' => 'required',
            'lokasi' => 'required',
            'waktu' => 'required',

        ]);
        $idUser = Auth::user()->id;


        $log = new Worklog();
        $log->title = $request->get('title');
        $log->deskripsi = $request->get('deskripsi');
        $log->project_id = $request->get('project_id');
        $log->status = $request->get('status');
        $log->tanggal = $request->get('tanggal');
        $log->lokasi = $request->get('lokasi');
        $log->waktu = $request->get('waktu');

        $poin = ($log->status === 'complete') ? min($request->get('waktu') / 8, 1) : 0;
        $log->poin = $poin;
        $log->user_id = $idUser;

        $log->save();

        if ($log->status === 'complete') {
            $this->updateDailyReport($log->user_id, $log->tanggal, $log->poin);
        }

        if ($log->status === 'absen') {
            $this->updateDailyReport($log->user_id, $log->tanggal, 0);
        }

        $this->updateMonthlyReport($log->user_id, $log->tanggal);

        return $this->sendResponse($log, 'Log berhasil disimpan.');
    }

    public function show($id)
    {
        // Logika untuk menampilkan detail catatan kerja dengan ID tertentu
    }

    public function edit(Worklog $id)
    {
        return $this->sendResponse($id, 'Worklog  successfully retrieved.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'deskripsi' => 'required',
            'project_id' => 'required',
            'status' => 'required',
            'tanggal' => 'required',
            'lokasi' => 'required',
            'waktu' => 'required',

        ]);

        $log = Worklog::find($id);
        $oldWorkDate = $log->tanggal; // Simpan tanggal sebelum diubah

        $log->title = $request->get('title');
        $log->deskripsi = $request->get('deskripsi');
        $log->project_id = $request->get('project_id');
        $log->status = $request->get('status');
        $log->tanggal = $request->get('tanggal');
        $log->lokasi = $request->get('lokasi');
        $log->waktu = $request->get('waktu');

        $poin = 0; // Default poin value

        if ($log->status === 'complete') {
            // If status is complete, calculate points
            $poin = min($request->get('waktu') / 8, 1);
        }

        $log->poin =  $poin;




        $log->save();

        // $this->updateDailyReport($log->user_id, $log->tanggal);

    if ($oldWorkDate != $request->get('tanggal')) {
        $this->updateDailyReport($log->user_id, $oldWorkDate);
        $this->updateDailyReport($log->user_id, $request->get('tanggal'));
    } else {
        $this->updateDailyReport($log->user_id, $request->get('tanggal'));
    }

        return $this->sendResponse($log, 'Log berhasil diubah.');
    }

    public function destroy($id)
    {
        $worklog = Worklog::find($id);

        if (!$worklog) {
            return $this->sendError('Worklog not found.');
        }
        // Get the user_id and tanggal before deleting the worklog


        // Delete the worklog
        $worklog->delete();

        // Recalculate and update DailyReport

        $this->updateDailyReport($worklog->user_id, $worklog->tanggal);

        // Recalculate and update MonthlyReport
        $this->updateMonthlyReport($worklog->user_id, $worklog->tanggal);


        return $this->sendSuccess('Worklog berhasil dihapus.');
    }

    public function updateDailyReport($userId, $workDate)
    {
        $dailyReport = DailyReport::where('user_id', $userId)
            ->where('work_date', $workDate)
            ->first();

        // Jika daily report belum ada, buat baru
        if (!$dailyReport) {
            $dailyReport = new DailyReport([
                'work_date' => $workDate,
                'poin' => 0,
                'user_id' => $userId,
            ]);
        }
        // Calculate totalPoinDaily for the specific date
        $totalPoinDaily = Worklog::where('user_id', $userId)
            ->whereDate('tanggal', $workDate)
            ->sum('poin');

        $dailyReport->poin = $totalPoinDaily;


        $dailyReport->poin = min($totalPoinDaily, 1);

        $dailyReport->save();

        $this->updateMonthlyReport($userId, $workDate);

    }

    public function updateMonthlyReport($userId, $monthYearOri)
    {
        $monthYears = \Carbon\Carbon::parse($monthYearOri)->firstOfMonth();

        // Calculate total_poin_daily
        $totalPoinDaily = DailyReport::where('user_id', $userId)
            ->whereMonth('work_date', $monthYears->month)
            ->sum('poin');


            $totalPresence = Worklog::where('user_id', $userId)
            ->where('status', 'complete')
            ->whereMonth('tanggal', $monthYears->month)
            ->distinct('tanggal')
            ->count();

            // Calculate total_absence
            $totalAbsence = Worklog::where('user_id', $userId)
                ->where('status', 'absen')
                ->whereMonth('tanggal', $monthYears->month)
                ->count();

            $totalPoinMonthly = ($totalPresence > 0) ? min($totalPresence / 20, 1) : 0;

            $monthlyReport = MonthlyReport::updateOrCreate(
                ['user_id' => $userId, 'month_year' => $monthYears],
                [
                    'total_poin_daily' => $totalPoinDaily,
                    'total_poin_monthly' => $totalPoinMonthly,
                    'total_presence' => $totalPresence,
                    'total_absence' => $totalAbsence,
                ]
            );

        return $monthlyReport;
    }
}
