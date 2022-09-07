<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class BanksInterests extends Pivot
{
    use HasFactory;
    protected $fillable = [
        'bank_id',
        'account_type_id',
        'period',
        'loan_percent',
    ];
    protected $cast = [
        'period' => 'integer',
        'loan_percent' => 'string',
    ];
}
