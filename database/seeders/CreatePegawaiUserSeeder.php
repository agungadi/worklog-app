<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreatePegawaiUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'agung adi',
            'username' => 'agungadi',
            'email' => 'agungadi@mail.com',
            'unit_divisi' => 2,
            'password' => bcrypt('123456')
        ],
      );



        $role = Role::create(['name' => 'Pegawai']);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);


        $user1 = User::create([
            'name' => 'Darmawan',
            'username' => 'darmawan',
            'email' => 'darmawan@mail.com',
            'unit_divisi' => 2,
            'password' => bcrypt('123456')
        ]);

            // Assign role "Pegawai" ke user
            $user1->assignRole([$role->id]);

        $user2 = User::create([
            'name' => 'Citra',
            'username' => 'citra',
            'email' => 'citra@mail.com',
            'unit_divisi' => 3,
            'password' => bcrypt('123456')
        ]);

            // Assign role "Pegawai" ke user
        $user2->assignRole([$role->id]);

        $user2 = User::create([
            'name' => 'teguh',
            'username' => 'teguh',
            'email' => 'teguh@mail.com',
            'unit_divisi' => 4,
            'password' => bcrypt('123456')
        ]);

            // Assign role "Pegawai" ke user
        $user2->assignRole([$role->id]);

    }
}
