<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CreditsMaxAmount extends Pivot
{
    use HasFactory;
    protected $fillable = [
        'bank_id',
        'credit_type_id',
        'max_amount',
    ];
}
