<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DivisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $divisi = [
            ['kode_divisi' => 'HR', 'nama_divisi' => 'HRD'],
            ['kode_divisi' => 'PRG', 'nama_divisi' => 'Programmer'],
            ['kode_divisi' => 'SA', 'nama_divisi' => 'Sistem Analis'],
            ['kode_divisi' => 'DSN', 'nama_divisi' => 'Desain'],
            // Tambahkan data lain sesuai kebutuhan
        ];

        DB::table('master_divisi')->insert($divisi);
    }
}
