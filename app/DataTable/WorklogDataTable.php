<?php

namespace App\DataTable;

use App\Models\Worklog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;


class WorklogDataTable
{
    public function get($input = [])
    {
        $idUser = Auth::user()->id;

        $query = Worklog::query()->select('worklogs.*');

        $query->where('worklogs.user_id', $idUser);

        $query->when(isset($input['status']), function (Builder $q) use ($input) {
            $q->where('worklogs.status', $input['status']);
        });

        $query->when(isset($input['project']), function (Builder $q) use ($input) {
            $q->where('worklogs.project_id', $input['project']);
        });

        return $query;
    }
}
