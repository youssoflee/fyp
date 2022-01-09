<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->unsignedBigInteger(('role_id'));
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('role_id')->references('id')->on('user_roles');
        });

        Schema::table('users', function (Blueprint $table) {
            $data = [
                [
                    'name' => 'Seller',
                    'email' => 'seller@gmail.com',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$9yPBmK50sn/2LGPC45GZYu0FlO7Ki7lCs4BPZnWFKiIbGdbGGbMhK', // abc
                    'remember_token' => NULL,
                    'role_id' => 1
                ],
                [
                    'name' => 'Customer',
                    'email' => 'customer@gmail.com',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$9yPBmK50sn/2LGPC45GZYu0FlO7Ki7lCs4BPZnWFKiIbGdbGGbMhK', // abc
                    'remember_token' => NULL,
                    'role_id' => 2
                ]
            ];

            User::insert($data);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
