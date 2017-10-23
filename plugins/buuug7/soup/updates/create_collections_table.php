<?php namespace Buuug7\Soup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateCollectionsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_collections', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->integer('user_id'); // 创建者ID
            $table->boolean('featured')->default(false);
            $table->timestamps();
        });

        Schema::create('buuug7_soup_collections_soups', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('collection_id');
            $table->integer('soup_id');
            $table->primary(['collection_id','soup_id']);
        });

        Schema::create('buuug7_soup_collections_users', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('collection_id');
            $table->integer('user_id');
            $table->primary(['collection_id','user_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_collections');
        Schema::dropIfExists('buuug7_soup_collections_soups');
        Schema::dropIfExists('buuug7_soup_collections_users');
    }
}
