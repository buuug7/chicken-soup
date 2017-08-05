<?php namespace Buuug7\Soup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateCommentsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_comments', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('content');
            $table->integer('soup_id')->unsigned();
            $table->integer('user_id')->unsigned(); // 用户ID
            $table->integer('target_user_id')->unsigned()->nullable(); // 回复目标用户ID
            $table->integer('target_comment_id')->unsigned()->nullable(); // 回复目标评论ID
            $table->timestamps();
        });
        
        Schema::create('buuug7_soup_comments_users', function(Blueprint $table)
        {
            $table->integer('comment_id');
            $table->integer('user_id');
            $table->primary(['comment_id','user_id']);
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_comments');
        Schema::dropIfExists('buuug7_soup_comments_users');
    }
}
