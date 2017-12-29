<?php

use Illuminate\Support\Facades\Route;
use October\Rain\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Buuug7\LoginWithGithub\Classes\Github;

Route::middleware(['web'])->group(function () {
    Route::get('/login/github', function () {
        $query = http_build_query([
            'client_id' => Config::get('buuug7.loginwithgithub::github.client_id'),
            'redirect_uri' => Config::get('buuug7.loginwithgithub::github.redirect_uri'),
            'scope' => 'user',
        ]);

        $authorize_uri = 'https://github.com/login/oauth/authorize?' . $query;
        return Redirect::to($authorize_uri);
    });

    Route::get('/login/github/callback', function () {
        $code = input('code');
        $token = Github::getToken($code);
        return $token;
    });
});
