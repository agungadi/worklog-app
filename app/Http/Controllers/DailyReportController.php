<?php

namespace App\Http\Controllers;

use App\DataTable\DailyReportDataTable;
use Illuminate\Http\Request;
use App\Models\DailyReport;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Carbon\Carbon;

class DailyReportController extends AppBaseController
{
    //
    public function index(Request $request)
    {
        // Logika untuk menampilkan data daily report
        $users = User::pluck('name', 'id');


        $work_date = DailyReport::distinct('work_date')
        ->orderBy('work_date', 'asc')
        ->pluck('work_date', 'work_date')
        ->map(function ($date) {
            return Carbon::parse($date)->format('F Y');
        })
        ->unique();

        if ($request->ajax()) {

            return DataTables::of((new DailyReportDataTable())->get($request->only(['work_date', 'users'])))->make(true);
        }

        return view('pegawai.daily_report.index', compact('work_date', 'users'));
    }


}
