<?php

use Illuminate\Support\Facades\Route;
use October\Rain\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Buuug7\LoginWithGithub\Classes\Wechat;
use RainLab\User\Models\User;
use October\Rain\Support\Facades\Str;
use RainLab\User\Facades\Auth;

Route::middleware(['web'])->group(function () {

    Route::get('/login/wechat', function () {
        $query = http_build_query([
            'appid' => Config::get('buuug7.loginwithwechat::wechat.AppID'),
            'redirect_uri' => Config::get('buuug7.loginwithwechat::wechat.redirect_uri'),
            'response_type' => 'code',
            'scope' => 'snsapi_login',
            'state' => Str::random(16),
        ]);

        $authorize_uri = 'https://open.weixin.qq.com/connect/qrconnect?' . $query;
        return Redirect::to($authorize_uri);
    });

    Route::get('/login/wechat/callback', function () {
        $code = input('code');
        return $code;
    });

});
