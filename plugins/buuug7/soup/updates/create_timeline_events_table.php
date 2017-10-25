<?php namespace Buuug7\Soup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateTimelineEventsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_timeline_events', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id'); // 触发事件的用户id
            $table->string('category'); //事件分类
            $table->string('event'); // 事件名称
            $table->text('data'); // 事件包含的信息
            $table->timestamp('created_at'); //
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_timeline_events');
    }
}
