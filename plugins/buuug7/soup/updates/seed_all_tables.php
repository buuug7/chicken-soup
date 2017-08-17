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
            'content' => '
梦见全人类中了一种一说谎就爆炸的病毒, 走在大街上, 四面噼里啪啦像过年放烟花, 我穿越人群轰鸣, 来到你家楼下, 大声喊着我爱你, 终于让你明白我说的不是谎话. 你流着泪说我也是, 炸成了天边一朵红霞.
',
            'reference' => '来自网易云音乐评论',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 心灵的平静
心灵的平静是智慧美丽的珍宝, 它来自于长期, 耐心的自我控制. 心灵的安宁意味着一种成熟的经历以及对于事物规律的不同寻常的了解.

一个人能够保持镇静的程度与他对自己的了解息息相关. 了解自己, 首先必须通过思考了解他人. 当他对人对已有了正确理解, 并越来越清楚事物内部存在的相互间的因果关系时, 他就会停止大惊小怪, 勃然大怒, 忐忑不安或是悲伤忧愁, 他会永远保持处变不惊, 泰然处事的态度.

镇静的人知道如何控制自己, 在与他人相处时能够适应他人, 别人反过来会尊敬他的精神力量, 并且会以他为楷模, 依靠他的力量. 一个人越是处变不惊, 他的成就, 影响力和号召力就越是巨大. 即使是一个普通的商人, 如果能够提高自我控制和保持沉着的能力, 那他会发现自己的生意蒸蒸日上, 因为人们一般都更愿意和一个沉着冷静的人做生意.

坚强, 冷静的人总是受到人们的爱戴和尊敬. "谁会不爱一个安静的心灵, 一个温柔敦厚, 不愠不火的生命?"无论是狂风暴雨还是艳阳高照, 无论是沧桑巨变还是命运逆转, 一切都没有关系, 因为这样的人永远安
静, 沉着, 待人友善. 我们称之为"静稳"的可爱的性格是人生修养的最后一课, 是生命盛开的鲜花, 是灵魂成熟的果实. 静稳和智慧一样宝贵, 其价值胜于黄金. 与宁静的生活相比, 追逐名利的生活是多么不值一提. 宁静的生活是在真理的海洋中, 在急流波涛之下, 不受风暴的侵扰, 保持永恒的安宁.

我们都曾结识过许多人, 他们因为火爆激烈的性格使自己的生活变得一团糟, 他们毁灭了一切真与美的事物, 同时也葬送了自己平稳安宁的性格, 并将坏影响四处传播. 大多数人都因缺少自我控制破坏了自己的生活. 损害了原有的幸福. 在生活中, 我们碰到真正能够沉着, 冷静, 保持平稳安宁的人真是寥若晨星.

人性因为毫无节制的狂热而骚动不安, 因为不加控制的悲伤而浮沉波动, 因为焦虑和怀疑而饱受摧残. 只有明智的人, 能够控制和引导自己思相的人, 才能够控制心灵所经的风风雨雨. 请对你的心说:"平和,安静!"
',
            'reference' => '个人收藏,来源不明',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 清晰的目标
+ 知道自己最需要什么,明白自己目前最需要什么.
+ 不要太在意别人的眼光和评论,因为我们每个人都有自己的思考方法,不要期望每个人都和你的一样,但是有个前提是你所坚持的你认为正确的东西必须要符合规律和道德观念,不能背离与次,尊重别人的观点,不要正面反击.
+ 做人,交友要有分别,不要把什么人都作为朋友,交友要慎重,做人要真诚,不要副与外表,注重自己内在的修养.
+ 要柔和的接受事物,作到坚定而不固执,冷静而不冷漠,稳重而不失去激情.
+ 时时的调整自己以顺应潮流,要接受新观念和新里念.
+ 不刻意迎合别人,不刻意疏远别人,尽自己的努力帮助别人,说话要留余地,做人要圆滑.
+ 凡事不要依赖别人,多靠自己,最明知的活法是作好自己只有你自己强大了,别人才会瞧的起你,那种揶揄奉承和妒忌比你强得人,是最傻得人.我们每个人都有自己的小花园需要自己去整理,不要只是去羡慕和妒忌别人的,你也可以依靠自己修整好自己的花园.
+ 适当的减少自己不必要的愿望,不要什么都想要,那样的话,你会活的很累,你也就没有更多的精力来作好你自己应该作的事情,学会放弃,真正成功的人并不是在每一方面作的都很优秀的人,而是在某一方面作的很出色得人.
',
            'reference' => '来源不明,不要抓我',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### six imposible things 六件不可能的事
+ one,there\'s a potion that can make you shrink.
+ 第一,有药水可以将我变小
+ two,and a cake that can make you grow.
+ 第二,有种蛋糕可以让我变大
+ three,anima ls can talk.
+ 第三,动物会说话
+ four,Alice cats can disappear.
+ 第四,猫会消失
+ five,there\'s a place called wonderland.
+ 第五,有个地方叫仙境
+ six,I can slay the Jabberwocky.
+ 第六,我能杀死炸脖龙
',
            'reference' => '来自 爱丽丝的梦游仙境',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);


        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 生活的艺术
+ 在你穷的时候,要少在家里,多在外面.
+ 在你富有的时候,要多在家里,少在外面.
+ 这就是生活的艺术,穷得时候,钱要花给别人,富的时候,钱要花给自己.
+ 很多人,都做颠倒了.
+ 穷的时候,不要计较,对别人要好.富的时候,要学会让别人对自己好,自己对自己更好.
+ 穷,要把自己贡献出去,尽量让别人利用.
+ 富,要把自己收藏好,小心别让别人随便利用.
+ 这些奇妙的生活方式,是很少人能够明白的.
+ 穷的时候,花钱给别人看.
+ 富的时候,花钱给自己享受.
+ 穷的时候一定要大方,富的时候,就不要摆阔了.
+ 生命已经恢复了简单,已经回到了宁静. 
+ 年轻不是过错,贫穷无需害怕.
+ 懂得培养自己,懂得什么是贵重物品,懂得该投资什么,懂得该在哪里节约,这是整个过程的关键.
+ 别乱买衣服,少买一点,但是可以买几件很有品味的.
+ 少在外面吃饭,要吃就请客,要请,就请比自己更有梦想的,更有思想,更努力的人,一旦生活需要的钱已经够了,最大的花费,就是用你的收入,完成你的梦想,去放开你的翅膀大胆地做梦,去让生命经历不一样的旅程.
 
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 出塞
> 王昌龄

秦时明月汉时关,  
万里长征人未还.  
但使龙城飞将在,  
不教胡马度阴山.

###### 译文
仍然是秦汉时的明月和边关,可是去万里之外打仗的战士还未回来.倘若攻袭龙城的英勇善战卫青现在依旧健在,绝不会让匈奴南下牧马度过阴山.
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);


        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 万里长城万里空,百世英雄百世梦
> 张廷玉

南来北往走西东, 人生杳杳在其中,   
天也来空地也空, 换了多少主人公.  
夜静听得三更鼓, 翻身不觉五更钟,   
从头仔细思量起, 便是南柯一梦中.   
一场辛苦一场空, 死后还归泥土中,   
身归泥土气随风, 一片顽皮化臭胧.  
在身置得万倾田, 死后只得三步地,   
埋骨何须桑梓地, 人生无处不青山.  
万里长城万里空, 百世英雄百世梦,   
沉舟侧畔轻帆过, 病树前头万木春.

#### 译文
没有 
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => 1,
            'content' => '
#### 不要在意别人是怎么看你说你的
不要在意别人在背后怎么看你说你, 因为这些言语改变不了事实, 却可能搅乱你的心. 心如果乱了, 一切就都乱了; 理解你的人, 不需要解释；不理解你的人, 不用你解释. 因为日久不一定生情, 但一定见人心. 人贵在大气, 要学会对自己说. 并请相信, 真正懂你的人, 绝不会因为那些有的、没有的而否定你.
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);


    }

}