<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Kam Heong',
            'type' => 'Cooking Paste',
            'desc' => 'Nyonya',
            'price' => 10.00,
            'quantity' => 10,
            'min_quantity' => 5,
            'status_id' => 1,
        ]);

        Product::create([
            'name' => 'Sukiyaki',
            'type' => 'Cooking Paste',
            'desc' => 'Nyonya',
            'price' => 10.00,
            'quantity' => 10,
            'min_quantity' => 5,
            'status_id' => 1,
        ]);

        Product::create([
            'name' => 'Lorbak',
            'type' => 'Snack',
            'desc' => 'Nyonya',
            'price' => 10.00,
            'quantity' => 10,
            'min_quantity' => 5,
            'status_id' => 1,
        ]);
    }
}
