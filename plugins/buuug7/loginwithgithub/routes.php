<?php

use Illuminate\Support\Facades\Route;
use October\Rain\Support\Facades\Config;
use Illuminate\Support\Facades\Redirect;
use Buuug7\LoginWithGithub\Classes\Github;
use RainLab\User\Models\User;
use October\Rain\Support\Facades\Str;
use RainLab\User\Facades\Auth;

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
        $githubUser = Github::getUserByToken($token);

        if (!User::where('github_id', $githubUser->id)->first()) {

            $password = Str::random(6);

            $user = Auth::register([
                'name' => $githubUser->name ? $githubUser->name : $githubUser->login,
                'email' => Github::getFakerEmail($githubUser->id),
                'password' => $password,
                'password_confirmation' => $password,
            ], true);

            $user->github_id = $githubUser->id;
            $user->social_avatar = $githubUser->avatar_url;
            $user->save();
            Auth::login($user);

        } else {

            $userInstance = User::where('github_id', $githubUser->id)->firstOrFail();
            $userInstance->social_avatar = $githubUser->avatar_url;
            $userInstance->name = $githubUser->name ? $githubUser->name : $githubUser->login;
            $userInstance->save();
            Auth::login($userInstance);

        }

        return Redirect::to('/');
    });

});
