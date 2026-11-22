<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'index')->name('index');
Route::inertia('/login', 'auth')->name('login');
Route::inertia('/404', 'error')->name('error');

Route::fallback(fn () => Inertia::render('error')
    ->toResponse(request())
    ->setStatusCode(404));
