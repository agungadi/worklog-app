<?php

namespace Database\Seeders;

use App\Models\Formula;
use App\Models\kelompok;
use App\Models\komponen;
use App\Models\subkomponen;
use App\Models\indikator;
use App\Models\ItemPernyataan;
use App\Models\OpsiJawaban;

use App\Models\MasterOpd;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class MasterTahap1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        $masteropd = file_get_contents(storage_path('json/opdNew.json'));
        $masteropd = json_decode($masteropd, true)['data'];
        MasterOpd::insert($masteropd);

        $tahap1 = file_get_contents(storage_path('json/tahap1.json'));
        $tahap1 = json_decode($tahap1, true)['data'];
        kelompok::insert($tahap1);

        $tahap2 = file_get_contents(storage_path('json/tahap2.json'));
        $tahap2 = json_decode($tahap2, true)['data'];
        komponen::insert($tahap2);

        $tahap3 = file_get_contents(storage_path('json/tahap3.json'));
        $tahap3 = json_decode($tahap3, true)['data'];
        subkomponen::insert($tahap3);

        $tahap4 = file_get_contents(storage_path('json/tahap4.json'));
        $tahap4 = json_decode($tahap4, true)['data'];
        indikator::insert($tahap4);

        $penilaian = file_get_contents(storage_path('json/penilaian.json'));
        $penilaian = json_decode($penilaian, true)['data'];
        ItemPernyataan::insert($penilaian);


        // $penjelasan = file_get_contents(storage_path('json/penjelasan.json'));
        // $penjelasan = json_decode($penjelasan, true)['data'];
        // OpsiJawaban::insert($penjelasan);

        $penjelasan = file_get_contents(storage_path('json/opsiJawaban.json'));
        $penjelasan = json_decode($penjelasan, true)['data'];
        OpsiJawaban::insert($penjelasan);

        $persen = file_get_contents(storage_path('json/opsiJawabanPersen.json'));
        $persen = json_decode($persen, true)['data'];
        OpsiJawaban::insert($persen);

        $formula = file_get_contents(storage_path('json/formula.json'));
        $formula = json_decode($formula, true)['data'];
        Formula::insert($formula);

        // $role = file_get_contents(storage_path('json/role.json'));
        // $role = json_decode($formula, true)['data'];
        // Role::insert($role);

    }
}
