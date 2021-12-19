<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusColor extends Model
{
    protected $table = 'status_colors';
    protected $primaryKey ='id';
    protected $fillable = [
        'color',
      ];
}
