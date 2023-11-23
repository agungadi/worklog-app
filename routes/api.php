<?php

use App\Http\Controllers\Tahap1Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ApiController;

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




Route::post('/register', [ApiController::class, 'register']);
Route::post('/login', [ApiController::class, 'login']);
Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('/getuser', [ApiController::class, 'getuser']);
    Route::get('/myworklog', [ApiController::class, 'worklog']);
    Route::post('logout', [ApiController::class, 'logout']);
});
