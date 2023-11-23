<?php

namespace App\DataTable;

use App\Models\Project;
use App\Models\Worklog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;


class ProjectDataTable
{
    public function get($input = [])
    {
        $idUser = Auth::user()->id;

        $query = Project::query()->select('projects.*');

        $query->where('projects.user_id', $idUser);

        $query->when(isset($input['status']), function (Builder $q) use ($input) {
            $q->where('projects.status', $input['status']);
        });

        $query->selectSub(function ($query) use ($idUser) {
            $query->selectRaw('SUM(worklogs.waktu)')
                ->from('worklogs')
                ->whereColumn('worklogs.project_id', 'projects.id')
                ->where('worklogs.user_id', $idUser)
                ->where('worklogs.status', 'complete')
                ->groupBy('worklogs.project_id');
        }, 'total_jam');

        return $query;
    }
}
