<?php namespace Buuug7\Soup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateSoupsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_soups', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id'); // 贡献者
            $table->text('content');
            $table->boolean('published')->default(false); // 发布
            $table->timestamp('published_at')->nullable(); // 发布时间
            $table->boolean('featured')->default(false); // 特色
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_soups');
    }
}
