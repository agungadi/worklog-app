<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonthlyReport extends Model
{
    use HasFactory;
    protected $table = 'monthly_reports';

    protected $fillable = [
        'month_year',
        'total_poin_daily',
        'total_poin_monthly',
        'total_presence',
        'total_absence',
        'user_id',
    ];

    public function dailyReports()
    {
        return $this->hasMany(DailyReport::class, 'user_id', 'user_id')
            ->whereYear('work_date', '=', date('Y', strtotime($this->month_year)))
            ->whereMonth('work_date', '=', date('m', strtotime($this->month_year)));
    }
}
