<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserRole extends Model
{
    protected $fillable = [
        'id',
        'role',
    ];

    public function UserRoles()
    {
        return $this->hasMany(User::class , 'role_id');
    }
}
