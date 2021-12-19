<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->unsignedBigInteger('color_id')->nullable();
            $table->timestamps();

            $table->foreign('color_id')->references('id')->on('status_colors');
        });

        Schema::table('product_statuses', function (Blueprint $table) {
            $data = [
                ['status' => 'Available', 'color_id' => 3],
                ['status' => 'Unavailable', 'color_id' => 4],
                ['status' => 'Low In Stock', 'color_id' => 5]
            ];
            AssetStatus::insert($data);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_product_status');
    }
}
