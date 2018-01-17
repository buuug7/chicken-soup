<?php

namespace Buuug7\LoginWithGithub\Classes;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Redirect;
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

    public static function getUserByToken($token)
    {
        $userUri = 'https://api.github.com/user';
        $http = new Client();
        $response = $http->request('get', $userUri, [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);
        return json_decode($response->getBody());
    }

    public static function getEmailByToken($token)
    {
        $emailsUri = 'https://api.github.com/user/emails';
        $http = new Client();
        $response = $http->request('get', $emailsUri, [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);

        foreach (json_decode($response->getBody(), true) as $email) {
            if ($email['primary'] && $email['verified']) {
                return $email['email'];
            }
        }

    }


    public static function getFakerEmail($identifier)
    {
        return 'iiiiiiii_' . $identifier . '@iiiiiiii.com';
    }


}
