<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $fillable = ['name', 'type', 'desc', 'quantity', 'min_quantity', 'price', 'status_id'];
    
    public function ProductStatus()
    {
        return $this->belongsTo(ProductStatus::class, 'status_id');
    }
}
