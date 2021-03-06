<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\ProductStatusController;

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


Route::post('/registerSeller', [AuthController::class, 'registerSeller']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/registerCustomer', [UserController::class, 'registerCustomer']);
Route::get('/getUsers', [UserController::class, 'index']);



Route::get('/getAllCustomer', [CustomerController::class, 'index']);
Route::post('/addCustomer', [CustomerController::class, 'store']);
Route::get('/showCustomer/{id}', [CustomerController::class, 'show']);
Route::get('/editCustomer/{id}', [CustomerController::class, 'edit']);
Route::get('/AddressDetails/{id}', [CustomerController::class, 'details']);
Route::put('/updateCustomer/{id}', [CustomerController::class, 'update']);
Route::put('/updateInformation/{id}', [CustomerController::class, 'updateInformation']);
Route::put('/updateAddress/{id}', [CustomerController::class, 'updateAddress']);
Route::delete('/delCustomer/{id}', [CustomerController::class, 'destroy']);

Route::get('/getAllAdmin', [AdminController::class, 'index']);
Route::post('/addAdmin', [AdminController::class, 'store']);
Route::get('/showAdmin/{id}', [AdminController::class, 'show']);
Route::put('/updateAdmin/{id}', [AdminController::class, 'update']);
Route::delete('/destroyAdmin/{id}', [AdminController::class, 'destroy']);

Route::get('/getAllProduct', [ProductController::class, 'index']);
Route::post('/addProduct', [ProductController::class, 'store']);
Route::get('/showProduct/{id}', [ProductController::class, 'show']);
Route::put('/updateProduct/{id}', [ProductController::class, 'update']);
Route::delete('/delProduct/{id}', [ProductController::class, 'destroy']);
Route::put('/addStock/{id}', [ProductController::class, 'addStock']);
Route::get('/checkStock', [ProductController::class, 'checkStock']);

Route::get('/getAllProductStatus', [ProductStatusController::class, 'index']);

Route::get('/getAllPayment', [PaymentController::class, 'index']);
Route::post('/addPayment', [PaymentController::class, 'store']);
Route::get('/showPayment/{id}', [PaymentController::class, 'show']);
Route::put('/updatePayment/{id}', [PaymentController::class, 'update']);
Route::delete('/destroyPayment/{id}', [PaymentController::class, 'destroy']);

Route::get('/getAllTransaction', [TransactionController::class, 'index']);
Route::post('/addTransaction', [TransactionController::class, 'store']);
Route::get('/showTransaction/{id}', [TransactionController::class, 'show']);
Route::put('/updateTransaction/{id}', [TransactionController::class, 'update']);
Route::delete('/destroyTransaction/{id}', [TransactionController::class, 'destroy']);

Route::get('/getAllAdmin', [AdminController::class, 'index']);
Route::post('/addAdmin', [AdminController::class, 'store']);
Route::get('/showAdmin/{id}', [AdminController::class, 'show']);
Route::put('/updateAdmin/{id}', [AdminController::class, 'update']);
Route::delete('/destroyAdmin/{id}', [AdminController::class, 'destroy']);

Route::get('/getAllOrder', [OrderController::class, 'index']);

Route::put('/updateOrder/{id}', [OrderController::class, 'update']);
Route::delete('/destroyOrder/{id}', [OrderController::class, 'destroy']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/changePassword', [AuthController::class, 'changePassword']);

    Route::get('/getCurrentUser', [UserController::class, 'getCurrentUser']);
    Route::get('/getCurrentAddress', [UserController::class, 'getCurrentAddress']);

    Route::get('/getCart', [OrderController::class, 'getCart']);
    Route::post('/addToCart', [OrderController::class, 'addToCart']);
    // Route::post('/updateCart', [OrderController::class, 'updateCart']);
    Route::put('/checkoutCart/{id}', [OrderController::class, 'checkoutCart']);
});
