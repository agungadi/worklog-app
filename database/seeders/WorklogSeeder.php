<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorklogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $projects = \App\Models\Project::pluck('id');
        $users = \App\Models\User::pluck('id');

        $worklogs = [
            [
                'title' => 'Task 1',
                'deskripsi' => 'Description for Task 1',
                'status' => 'todo',
                'tanggal' => '2023-10-2',
                'lokasi' => 'Office Malang',
                'waktu' => 8,
                'poin' => 1,
                'user_id' => 2,
                'project_id' => 1,
            ],


        ];

        DB::table('worklogs')->insert($worklogs);
    }
}
