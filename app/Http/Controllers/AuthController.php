<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{

    public function showRegister()
    {
        return Inertia::render('auth/register');
    }

    public function register(Request $request) {}

    public function showLogin()
    {
        return Inertia::render('auth/login');
    }
    public function login(Request $request) {}
}
