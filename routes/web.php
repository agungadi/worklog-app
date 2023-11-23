<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Tahap1Controller;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\WorklogController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\DailyReportController;
use App\Http\Controllers\MonthlyReportController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('home', [HomeController::class, 'index'])->name('dashboard');


Route::group(['middleware' => ['auth', 'role:Pegawai']], function () {

    Route::get('worklog', [WorklogController::class, 'index'])->name('worklog.index');

    Route::get('worklog/{id}/edit', [WorklogController::class, 'edit'])->name('worklog.edit');
    Route::put('worklog/{id}', [WorklogController::class, 'update'])->name('worklog.update');
    Route::post('worklog', [WorklogController::class, 'store'])->name('worklog.store');
    Route::delete('worklog/{id}', [WorklogController::class, 'destroy'])->name('worklog.destroy');

    Route::get('project', [ProjectController::class, 'index'])->name('project.index');
    Route::get('project/{id}/edit', [ProjectController::class, 'edit'])->name('project.edit');
    Route::put('project/{id}', [ProjectController::class, 'update'])->name('project.update');
    Route::post('project', [ProjectController::class, 'store'])->name('project.store');
    Route::delete('project/{id}', [ProjectController::class, 'destroy'])->name('project.destroy');


});

Route::group(['middleware' => ['auth', 'role:Pegawai|HR']], function () {


    Route::get('daily', [DailyReportController::class, 'index'])->name('daily.index');

    Route::get('monthly', [MonthlyReportController::class, 'index'])->name('monthly.index');
});

Route::group(['middleware' => ['auth', 'role:HR']], function () {
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::post('users', [UserController::class, 'store'])->name('users.store');
    Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');


});


Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

