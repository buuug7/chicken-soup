<?php


Route::get('/test-login', function () {
    $user = \RainLab\User\Models\User::findByEmail('youpp@126.com');
    \RainLab\User\Facades\Auth::login($user);
    return \Illuminate\Support\Facades\Redirect::to('/');
});