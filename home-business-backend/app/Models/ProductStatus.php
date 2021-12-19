<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'color_id',
    ];

    public function StatusColor()
    {
        return $this->belongsTo(StatusColor::class, 'color_id');
    }
}
