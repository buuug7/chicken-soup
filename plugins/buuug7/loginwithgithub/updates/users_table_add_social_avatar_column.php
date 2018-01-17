<?php namespace Buuug7\LoginWithGithub\Updates;

use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;
use October\Rain\Support\Facades\Schema;

class UsersTableAddSocalAvatarColumn extends Migration
{
    public function up()
    {
        if (Schema::hasColumns('users', ['social_avatar'])) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            $table->string('social_avatar')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('social_avatar');
        });
    }

}
