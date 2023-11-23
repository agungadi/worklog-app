<?php

namespace App\DataTable;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * @param  array  $input
 *
 * @return State
 */
class UserDataTable
{
    /**
     * @param  array  $input
     *
     * @return MasterTahap1
     */
    public function get($input = [])
    {
        /** @var MasterTahap4 $query */
        // $query = User::query()->select('users.*');
        $query = User::query()->select('users.id', 'users.name', 'users.unit_divisi', 'users.email',  'users.username', 'roles.name as RoleName', 'model_has_roles.role_id', 'model_has_roles.model_id')
        ->join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
        ->join('roles', 'roles.id', '=', 'model_has_roles.role_id');

        $query->when(isset($input['unit_divisi']), function (Builder $q) use ($input) {
            $q->where('users.unit_divisi', $input['unit_divisi']);
        });

        return $query;
    }
}
