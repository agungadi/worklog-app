<?php

namespace App\DataTable;

use App\Models\DailyReport;
use App\Models\Worklog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


class DailyReportDataTable
{
    public function get($input = [])
    {
        $user = Auth::user();

        $idUser = Auth::user()->id;

        $query = DailyReport::query()->select('daily_reports.*');

        if ($user->hasRole('Pegawai')) {
        $query->where('daily_reports.user_id', $idUser);
        // Menghitung total jam dari worklogs
        $query->addSelect([
            'total_jam_worklogs' => Worklog::selectRaw('SUM(waktu)')
                ->whereColumn('daily_reports.work_date', 'worklogs.tanggal')
                ->where('worklogs.user_id', $idUser)
        ]);
        }else {
            $query->addSelect([
                'total_jam_worklogs' => Worklog::selectRaw('SUM(waktu)')
                ->whereColumn('daily_reports.work_date', 'worklogs.tanggal')
                ->groupBy('worklogs.user_id')
                ->limit(1) // Batasi hasil menjadi satu baris

            ]);
        }

        $query->when(isset($input['work_date']), function (Builder $q) use ($input) {
            $selectedDate = Carbon::parse($input['work_date']);
            $year = $selectedDate->year;
            $month = $selectedDate->month;

            $q->whereYear('daily_reports.work_date', $year);
            $q->whereMonth('daily_reports.work_date', $month);
        });

        $query->when(isset($input['users']), function (Builder $q) use ($input) {
            $q->where('daily_reports.user_id', $input['users']);
        });



        return $query;
    }
}
