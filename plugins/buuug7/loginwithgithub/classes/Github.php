<?php

namespace Buuug7\LoginWithGithub\Classes;

use GuzzleHttp\Client;
use October\Rain\Support\Facades\Config;

class Github
{
    public static function getToken($code)
    {
        $tokenUri = 'https://github.com/login/oauth/access_token';
        $http = new Client();
        $response = $http->request('post', $tokenUri, [
            'headers' => [
                'Accept' => 'application/json',
            ],
            'form_params' => [
                'client_id' => Config::get('buuug7.loginwithgithub::github.client_id'),
                'client_secret' => Config::get('buuug7.loginwithgithub::github.client_secret'),
                'code' => $code,
                'redirect_uri' => Config::get('buuug7.loginwithgithub::github.redirect_uri'),
            ],
        ]);
        return json_decode($response->getBody())->access_token;
    }
}
