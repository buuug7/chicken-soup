<?php namespace Buuug7\Soup\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateTagsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_tags', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('slug');
        });

        Schema::create('buuug7_soup_soups_tags', function (Blueprint $table) {

            $table->engine = 'innoDB';
            $table->integer('soup_id');
            $table->integer('tag_id');
            $table->primary(['soup_id','tag_id']);

        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_soup_tags');
        Schema::dropIfExists('buuug7_soup_soups_tags');
    }
}
