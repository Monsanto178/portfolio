<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return view('app');
    return inertia('Home');
});

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::get('/download-cv-es', function() {
    return response()->download(public_path('/cv/Rosello_Federico_Gabriel_CV.pdf'));
});

Route::get('/download-cv-en', function() {
    return response()->download(public_path('/cv/Rosello_Federico_Gabriel_Resume.pdf'));
});

Route::post('/send', [ContactController::class, 'sendMessage'])->name('contact.send');

Route::get('/*', function () {
    return Inertia::render('NotFound');
});
