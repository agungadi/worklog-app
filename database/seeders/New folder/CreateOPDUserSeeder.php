<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateOPDUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'kominfo',
            'username' => 'kominfo',
            'email' => 'kominfo@mail.com',
            'unit_opd' => 13,
            'password' => bcrypt('123456')
        ]);

        $role = Role::create(['name' => 'AdminOPD']);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
