## timeline event
暂时支持`Buuug7\Soup\Models\Soup`类型的一些事件


#### 数据模型

+ id 主键
+ user_id 用户id
+ event_type 事件类型，对应为具体模型（model）类的名称，例如`RainLab\User\Models\User`,也就是一个类对应一种事件类型
    + `RainLab\User\Models\User`
    + `Buuug7\Soup\Models\Soup`
    + ....
+ event_id 事件id，对应为具体模型（model）的id
+ data 事件包含的额外信息,可以额外扩充
    + method 对目标模型的具体操作方法
        + create 创建
        + update 更新
        + delete 删除
        + ...
    + message 额外的消息
+ created_at 创建时间


#### 关联关系
跟User模型之间的关系为一对多，即一个user拥有多个事件，一个事件仅属于一个user，所以为 many to one 关系。  


