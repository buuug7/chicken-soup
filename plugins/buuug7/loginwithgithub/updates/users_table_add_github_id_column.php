<?php namespace Buuug7\LoginWithGithub\Updates;

use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;
use October\Rain\Support\Facades\Schema;

class UsersTableAddGithubIdColumn extends Migration
{
    public function up()
    {
        if (Schema::hasColumns('users', ['github_id'])) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            $table->string('github_id')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('github_id');
        });
    }

}
