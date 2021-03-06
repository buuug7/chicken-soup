<?php namespace Buuug7\Soup\Updates;

use Buuug7\Soup\Models\Collection;
use Buuug7\Soup\Models\Soup;
use Buuug7\Soup\Models\Tag;
use Carbon\Carbon;
use October\Rain\Database\Updates\Seeder;
use RainLab\User\Facades\Auth;

class SeedUser extends Seeder
{
    public function run()
    {
        // seed rainlab.user User

        $user01 = Auth::findUserByLogin('youpp@126.com');
        if (!$user01) {
            Auth::register([
                'name' => 'buuug7',
                'email' => 'youpp@126.com',
                'password' => '111111',
                'password_confirmation' => '111111',
            ], true);
        }

        $user02 = Auth::findUserByLogin('20654039@qq.com');
        if (!$user02) {
            Auth::register([
                'name' => 'TwiceBug',
                'email' => '20654039@qq.com',
                'password' => '111111',
                'password_confirmation' => '111111',
            ], true);
        }

    }

}

