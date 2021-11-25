<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/getAllCustomer', [CustomerController::class, 'index']);
Route::post('/addCustomer', [CustomerController::class, 'store']);
Route::get('/showCustomer/{id}', [CustomerController::class, 'show']);
Route::put('/updateCustomer/{id}', [CustomerController::class, 'update']);
Route::delete('/destroyCustomer/{id}', [CustomerController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
