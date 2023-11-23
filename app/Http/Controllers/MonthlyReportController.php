<?php

namespace App\Http\Controllers;

use App\DataTable\MonthlyReportDataTable;

use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use App\Models\MonthlyReport;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class MonthlyReportController extends AppBaseController
{
    public function index(Request $request)
    {
        $users = User::pluck('name', 'id');


        if ($request->ajax()) {
            return DataTables::of((new MonthlyReportDataTable())->get($request->only(['work_date', 'users'])))->make(true);
        }
        return view('pegawai.monthly_report.index', compact('users'));
    }
}
