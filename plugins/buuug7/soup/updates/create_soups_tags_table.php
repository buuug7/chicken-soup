<?php namespace Buuug7\Soup\Updates;

use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;
use October\Rain\Support\Facades\Schema;

class CreateSoupsTagsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_soup_soups_tags', function (Blueprint $table) {

            $table->engine = 'innoDB';
            $table->integer('soup_id');
            $table->integer('tag_id');
            $table->primary(['soup_id','tag_id']);

        });
    }

    public function down(){
        Schema::dropIfExists('buuug7_soup_soups_tags');
    }

}