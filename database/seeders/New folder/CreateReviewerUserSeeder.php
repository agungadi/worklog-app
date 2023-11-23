<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateReviewerUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Reviewer',
            'username' => 'reviewer',
            'email' => 'reviewer@mail.com',
            'unit_opd' => 18,
            'password' => bcrypt('123456')
        ]);

        $role = Role::create(['name' => 'Reviewer']);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
