<?php

use App\Models\StatusColor;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_colors', function (Blueprint $table) {
            $table->id();
            $table->string('color');
        });

        Schema::table('status_colors', function (Blueprint $table) {
            $data = [
                ["color" => "primary"],
                ["color" => "secondary"],
                ["color" => "success"],
                ["color" => "danger"],
                ["color" => "warning"],
                ["color" => "info"],
                ["color" => "light"],
                ["color" => "dark"],
                ["color" => "white"],
                ["color" => "transparent"],
            ];

            StatusColor::insert($data);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status_colors');
    }
}
