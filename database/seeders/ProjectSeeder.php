<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $users = \App\Models\User::pluck('id');

        $projectsData = [
            [
                'name_project' => 'WEB Backend A',
                'status' => 'running',
                'start_date' => now()->firstOfMonth(),
                'due_date' => now()->lastOfMonth(),
                'user_id' => 2,
            ],
            [
                'name_project' => 'Web Frontend B',
                'status' => 'running',
                'start_date' => now()->firstOfMonth(),
                'due_date' => now()->lastOfMonth(),
                'user_id' => 2,
            ],

            // Tambahkan data lain sesuai kebutuhan
        ];

        DB::table('projects')->insert($projectsData);
    }
}
