<?php

namespace App\DataTable;

use App\Models\MonthlyReport;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

use Illuminate\Support\Facades\DB;

class MonthlyReportDataTable
{
    public function get($input = [])
    {
        $user = Auth::user();
        $idUser = $user->id;


        $query = MonthlyReport::query()->select('monthly_reports.*');

        if ($user->hasRole('Pegawai')) {
        $query->where('monthly_reports.user_id', $idUser);
        }


        $query->when(isset($input['users']), function (Builder $q) use ($input) {
            $q->where('monthly_reports.user_id', $input['users']);
        });


        $query = $query->get();

        $query->each(function ($monthlyReport) {
            $idUser =  Auth::user()->id;
            $totalJam = DB::table('worklogs')
            ->where(function ($query) use ($idUser) {
                if (Auth::user()->hasRole('Pegawai')) {
                    $query->where('user_id', $idUser);
                }
            })
                 ->where('worklogs.status', 'complete')
                ->where('tanggal', '>=', $monthlyReport->month_year)
                ->where('tanggal', '<', date('Y-m-d', strtotime($monthlyReport->month_year . ' +1 month')))
                ->groupBy('worklogs.user_id')
                ->limit(1)
                ->sum('waktu');

            $monthlyReport->total_jam_worklogs = $totalJam;
            $monthlyReport->formatted_month_year = \Carbon\Carbon::parse($monthlyReport->month_year)->format('Y-m-d (F)');

        });

        return $query;

    }

}
