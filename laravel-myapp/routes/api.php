<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\book_controller;
use App\Http\Controllers\API\category_controller;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/book/{id}', [book_controller::class, 'show']);
Route::get('/book', [book_controller::class, 'index']);
Route::post('/book', [book_controller::class, 'store']);
Route::put('/book/{id}', [book_controller::class, 'update']);
Route::delete('/book/{id}', [book_controller::class, 'destroy']);
Route::get('/category', [category_controller::class, 'index']);
