<?php

use App\Models\ProductStatus;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductStatusesTable extends Migration
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
            ProductStatus::insert($data);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_statuses');
    }
}
