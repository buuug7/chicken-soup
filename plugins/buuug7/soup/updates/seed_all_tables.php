<?php namespace Buuug7\Soup\Updates;

use Buuug7\Soup\Models\Soup;
use Buuug7\Soup\Models\Tag;
use Carbon\Carbon;
use October\Rain\Database\Updates\Seeder;
use RainLab\User\Facades\Auth;

class SeedAllTables extends Seeder
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
        
        Tag::create([
            'name' => '古风',
            'slug' => 'gu-feng',
        ]);
        Tag::create([
            'name' => '励志',
            'slug' => 'li-zhi',
        ]);
        Tag::create([
            'name' => '装逼',
            'slug' => 'zhuang-bi',
        ]);
        Tag::create([
            'name' => '婉约',
            'slug' => 'wan-yue',
        ]);
        Tag::create([
            'name' => '卖萌',
            'slug' => 'mai-meng',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '梦见全人类中了一种一说谎就爆炸的病毒,走在大街上，四面噼里啪啦像过年放烟花，我穿越人群轰鸣，来到你家楼下，大声喊着我爱你，终于让你明白我说的不是谎话。你流着泪说我也是，炸成了天边一朵红霞.',
            'reference' => '来自网易云音乐评论',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

    }

}