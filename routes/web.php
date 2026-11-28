<?php

use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'index')->name('index');
// Route::inertia('/login', 'auth')->name('login');
Route::inertia('/404', 'error')->name('error');

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');

Route::fallback(fn() => Inertia::render('error')
    ->toResponse(request())
    ->setStatusCode(404));
