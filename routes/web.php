<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'index')->name('index');
Route::inertia('/login', 'auth')->name('login');
Route::inertia('/dashboard', 'dashboard')->name('dashboard');
Route::inertia('/facilities', 'facilities')->name('facilities');
Route::inertia('/booking', 'booking')->name('booking');
Route::inertia('/receipt', 'receipt')->name('receipt');
Route::inertia('/profile', 'profile')->name('profile');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/404', 'error')->name('error');

Route::fallback(fn () => Inertia::render('error')
    ->toResponse(request())
    ->setStatusCode(404));
