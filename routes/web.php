<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return view('app');
    return inertia('Home');
});

Route::get('/*', function () {
    return Inertia::render('NotFound');
});
