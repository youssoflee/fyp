<?php

namespace App\Models;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDetail extends Model
{
    use HasFactory;

    protected $table = 'order_details';

    protected $fillable = [
        'order_id',
        'product_id',
        'purchase_quantity',
        'amount',
    ];

    public function Order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function Product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
