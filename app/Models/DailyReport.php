<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyReport extends Model
{
    use HasFactory;

    protected $table = 'daily_reports';

    protected $fillable = [
        'work_date',
        'poin',
        'user_id',
    ];
    public function monthlyReport()
    {
        return $this->belongsTo(MonthlyReport::class, 'user_id', 'user_id')
            ->whereYear('month_year', '=', date('Y', strtotime($this->work_date)))
            ->whereMonth('month_year', '=', date('m', strtotime($this->work_date)));
    }
}
