<?php

namespace App\Models;

use App\Models\OrderDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $fillable = [
        'customer_id',
        'total_amount',
        'order_status',
    ];

    public function OrderDetail()
    {
        return $this->hasMany(OrderDetail::class, 'order_id');
    }
}
