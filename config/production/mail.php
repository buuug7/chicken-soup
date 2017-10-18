<?php

return [


    'driver' => env('MAIL_DRIVER', 'smtp'),

    'host' => env('MAIL_HOST', 'smtp.qq.com'),

    'port' => env('MAIL_PORT', 465),

    'from' => ['address' => '3190136675@qq.com', 'name' => '鸡汤文'],

    'encryption' => env('MAIL_ENCRYPTION', 'ssl'),


    'username' => env('MAIL_USERNAME', '190136675@qq.com'),

    'password' => env('MAIL_PASSWORD', 'adxwvgbqhwejdfcj'),

];
