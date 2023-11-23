<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MasterDivisi extends Model
{
    use HasFactory;

    protected $table = 'master_divisi';

    public function user():HasMany
    {
        return $this->hasMany(user::class, 'unit_divisi');
    }



}
