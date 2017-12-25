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
            $table->string('event_type'); // 事件类型
            $table->integer('event_id'); // 事件类型对应的id
            $table->text('data'); // 事件包含的额外信息
            $table->timestamp('created_at'); //
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_timeline_events');
    }
}
