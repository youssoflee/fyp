<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customers';

    protected $fillable = [
        'user_id',
        'phone_num',
        'address',
        'zipcode',
        'city',
        'state'
    ];

    public function User()
    {
        return $this->belongsTo(User::class , 'user_id');
    }
}
