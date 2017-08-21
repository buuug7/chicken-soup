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
            'contributor_id' => $user01->id,
            'content' => '
梦见全人类中了一种一说谎就爆炸的病毒, 走在大街上, 四面噼里啪啦像过年放烟花, 我穿越人群轰鸣, 来到你家楼下, 大声喊着我爱你, 终于让你明白我说的不是谎话. 你流着泪说我也是, 炸成了天边一朵红霞.
',
            'reference' => '来自网易云音乐评论',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => $user01->id,
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
            'contributor_id' => $user01->id,
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
            'contributor_id' => $user01->id,
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
            'contributor_id' => $user01->id,
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
            'contributor_id' => $user02->id,
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
            'contributor_id' => $user02->id,
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
            'contributor_id' => $user02->id,
            'content' => '
#### 不要在意别人是怎么看你说你的
不要在意别人在背后怎么看你说你, 因为这些言语改变不了事实, 却可能搅乱你的心. 心如果乱了, 一切就都乱了; 理解你的人, 不需要解释；不理解你的人, 不用你解释. 因为日久不一定生情, 但一定见人心. 人贵在大气, 要学会对自己说. 并请相信, 真正懂你的人, 绝不会因为那些有的、没有的而否定你.
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => $user02->id,
            'content' => '
#### 27岁以上的单身男N条忠告

1. 你可以不拥有任何东西,除了对生活的激情
2. 然后是钱, 努力赚钱　
3. 有了钱, 可以拥有很多女人的身体.没有钱, 要拥有很多女人的心. 如果身体和心你都无法得到, 那只能说明你的无能.　
4. 英雄和浪子, 取长补短.该英雄时要英雄, 该浪子时得浪子.
5. 喝酒, 抽烟,  一个都不能上瘾.　
6. 热爱体育, 如果你不热爱你就不是男人. 即使你爱体育爱得发疯, 也不能抱着体育生活一辈子.
7. 善待你的家人.
8. 网络游戏, 浅尝辄止. 有分寸, 懂得控制自己.
9. 厨艺精湛, 但不轻易下厨. 如果厨艺不佳, 刀功一定要好. 得到女人的心,先满足她的胃. 再给她可以倚靠的肩膀.
10. 依赖, 女人的致命处. 想让女人嫁给你, 给她安全感. 经济上和精神上的双重安全. 
11. 不要以为每个女人都很傻. 如果不打算骗女人一生一世. 就不要轻易骗她. 如果是善意的谎言, 要设法让她明白你的良苦用心. 　
12. 如果不爱她, 就不要娶她. 除非你能保证对她好. 　
13. 如果背叛了她, 就尽量补偿她. 女人的寿命比男人长, 她会恨男人一直恨到死. 最好不要得罪女人. 补偿最好的方式是钱. 　
14. 连钱都不要的女人, 要小心. 　
15. 追到一个女人很容易, 可是摆脱掉却很难. 追求之前请三思. 　
16. 不要跟玩不起的人玩. 　
17. 就算是尝试一夜情, 也不要选择去嫖娼. 　
18. 对象的选择和客户一样, 慎重. 　
19. 不要轻易给女人承诺. 说者无心, 听者有意. 　
20. 尊重女人的最好方式就是坦诚对她. 即使你是个流氓, 也要流氓得坦坦荡荡. 　
21. 没有一个女人, 能比你的母亲重要. 　
22. 小事糊涂, 大事不糊涂. 　
22. 身材魁梧, 动作温柔. 　
23. 找一个理解你的人做妻子. 找一个了解你的女人做知已. 　
24. 作为成熟男人, 应该清楚得不到的才是最好的. 所以, 该舍时要舍得. 　
25. 不要打女人. 有这种冲动前先看看《妇女权益保障法》. 　
26. 不要谈太多次恋爱. 否则你自己都会厌倦不堪. 　
27. 不要见一个爱一个, 爱得太多, 你的爱就要贬值. 　
28. "我爱你"这三个字不必挂在嘴边, 用行动来证明吧. 　
29. "我爱你"堵住所有废话的最后一击. 话要用在刀刃上. 　
20. 拥抱或者吻. 肢体语言永远比语言更有力度. 　
30. 对上司, 可以服从, 可以抗议. 就是不能卑躬屈膝. 　
31. 买一栋房子. 即使是按揭. 只要你不打算当无根浪子. 　
32. 再买一栋. 即使是借钱. 用于投资. 　
33. 炒股. 不为赚钱, 只为证明自己的判断力. 　
34. 即使是输掉一栋房子, 也要笑着自嘲：我不是一个输不起的人. 　
35. 买车. 先买二手车. 如果你技术很好或者有很多钱则另当别论. 　
36. 哪儿摔倒, 哪儿站起来再摔几次. 　
37. 没有才华, 也要有气魄. 　
38. 不要西装革履, 也不必着装休闲. 把衬衫扣子解掉三颗, 就是一种随意. 　
39. 神采飞扬, 不修边幅. 穿西装时记着把商标撕掉. 　
40. 笑, 在任何人面前. 让你周围的人因为你的存在而感到快乐. 　
41. 怕硬可以, 欺软不行. 　
42. 选择婚姻, 而不是婚姻选择你. 　
43. 着装整洁, 不必非得把皮鞋擦得锃亮. 　
44. 随意. 不必往头发上喷发胶或者定型水. 　
45. 看一个女人虚荣不虚荣, 就剃上光头衣冠不整地跟她一起走在大街上. 注意她的表情. 
46. 一支玫瑰, 或者一句甜言蜜语. 关键时候, 派上用场. 女人是很容易满足的. 　
47. 因为需要才喜欢, 还是因为喜欢才需要. 分清楚. 　
48. 想跟女人分手时, 设法让她先提出来. 　
49. 大智若愚. 傻与不傻, 先看你会不会装傻. 　
50. 做一个出色的男人, 先学会哄. 　
51. 哄上司, 哄同事, 哄老人, 哄女人, 哄孩子. 　
52. 如果以上你通通都能哄到, 那么恭喜你, 你的人生一定值得你炫耀. 
53. 魅力源于实力. 　
54. 能让别人跟着你走, 是你的魅力所在. 　
55. 脾气温和, 性格好斗. 　
56. 内敛. 该出手时再出手. 　
57. 同流, 但不合污. 　
58. 异想天开. 没有异想, 何来天开？　
59. 沉稳. 不乏可爱. 　
60. 如果实在长相严肃, 至少可以带点儿冷幽默. 　
61. 有自己的立场和观点. 不一定要表明出来. 　
62. 说到做到. 做到再说. 　
63. 旅游. 不必期待艳遇. 　
64. 沉默. 有些话是不必说出来的. 　
65. 在女人面前, 永远不要解释, 只有认错. 　
66. 邀请不熟的女士吃饭, 要找些天时地利的借口. 　
67. 像个君子, 即使你不是. 　
68. 先赚钱, 再谈爱. 　
69. 同居. 如果你享受这种习惯. 　
70. 享受眼前的同时, 想想以后. 　
71. 冷静和超然, 即使是在危难时刻. 装也要装出来. 　
72. 得之淡然, 失之泰然. 一切皆顺其自然. 顺其自然, 并不代表不去争取. 　
73. 不要跟一般人一般见识, 即使是特殊人也一样. 　
74. 不要骂脏话. 　
75. 侮辱一个人最好的方式就是置之不理. 侮辱, 而不是责骂. 　
76. 认真. 但不顽固. 　

> 本来有一百条,这是缩减后的
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => $user02->id,
            'content' => '
#### Yesterday once more 昨日重现 中英文

+ When I was young I\'d listen to the radio
+ 年少时我喜欢听着收音机
+ Waiting for my favorite songs
+ 等候我喜欢的歌曲轻轻响起
+ When they played I\'d sing along,
+ 我独自为它伴唱, 
+ It make me smile.
+ 这时的我, 心神荡漾.

+ Those were such happy times and not so long ago
+ 那些真是快乐的时光, 仿佛就发生在不远的身旁
+ How I wondered where they\'d gone.
+ 我现在多想知道美好的时光（他们）都已去向何方？
+ But they\'re back again just like a long lost friend
+ 然而此时, 他们都又回来了, 象失散的朋友再次回来
+ All the songs I love so well.
+ 所有的歌曲我还是那样喜欢
+ Every shalala every wo\'wo
+ 每一个字,每一句歌词
+ still shines.
+ 仍散发光芒
+ Every shing-a-ling-a-ling that they\'re starting to sing
+ 每一句sing aling aling 他们唱得
+ so fine
+ 还是如此动听

+ When they get to the part
+ 每当听到他们离别的时候
+ where he\'s breaking her heart
+ 他伤了她的心的时候
+ It can really make me cry
+ 确实让我哭泣
+ just like before.
+ 就象过去一样
+ It\'s yesterday once more.
+ 一切仿佛昨日重现
+ (Shoobie do lang lang)
+ 无比惆怅.

+ Looking back on how it was in years gone by
+ 回头看看走过的岁月
+ And the good times that I had
+ 和曾经美好的时光
+ makes today seem rather sad,
+ 幸福记忆让今天的我很感伤
+ So much has changed.
+ 有太多已经改变

+ It was songs of love that I would sing to them
+ 只有那些关于爱的歌曲让我依旧吟唱
+ And I\'d memorize each word.
+ 每句歌词还印在我脑海里
+ Those old melodies still sound so good to me
+ 那些旧的记忆依旧那么美妙
+ As they melt the years away
+ 即便是岁月蹉跎, 颜容消磨.
+ Every shalala every wo\'wo still shines
+ 每一个字,每一句歌词,仍在我心里闪耀
+ Every shing-a-ling-a-ling that they\'re starting to sing
+ 每一个音符, 每一段旋律
+ so fine 令我心中掀起波浪

+ All my best memories come back clearly to me
+ 我仿佛又回到了我那最美好的记忆中, 清新而又爽朗
+ Some can even make me cry
+ 过去的一些事情又不禁让我潸然泪下, 暗自悲伤
+ just like before.
+ 就象过去一样, 
+ It\'s yesterday once more.
+ 昨日重现, 岁月如歌, 
+ (Shoobie do lang lang)
+ 如风随形, 飘然忽没.

+ Every shalala every wo\'wo still shines.
+ Every shing-a-ling-a-ling that they\'re starting to sing
+ so fine
+ Every shalala every wo\'wo still shines.
+ Every shing-a-ling-a-ling that they\'re starting to sing so fine
            
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => $user02->id,
            'content' => '
#### 林深时见鹿
林深时见鹿  
海蓝时见鲸  
梦醒时见你
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);


        Soup::create([
            'contributor_id' => $user01->id,
            'content' => '
#### 赶在忧虑毁灭你之前，改掉忧虑的坏习惯
+ 使自己忙碌
+ 不要为了小事而烦扰
+ 估算你所忧虑事情的概率
+ 接受不可改变的事实
+ 就此打住
+ 不要锯木宵
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);

        Soup::create([
            'contributor_id' => $user01->id,
            'content' => '
如果你要你家庭有一个幸福美满快乐的生活，那么你只需要做:  
第一项, 不要喋喋不休  
第二项, 不要尝试去改变你的伴侣  
第三项, 不要批评  
第四项, 给予对方真诚的欣赏  
第五项, 随时注意琐碎细微的地方  
第六项, 要有礼貌  
第七项, 阅读一本有关结婚性生活的好
',
            'reference' => '来自 未知 (-_-',
            'published' => true,
            'published_at' => Carbon::now(),
            'status' => 'passed',
        ]);


    }

}