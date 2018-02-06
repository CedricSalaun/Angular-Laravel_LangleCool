<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForignkeyAdverts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adverts', function (Blueprint $table) {
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');
            $table->integer('category_id')->unsigned()->nullable();
            $table->foreign('category_id')
                  ->references('id')->on('categories')
                  ->onDelete('set null');
            $table->integer('location_id')->unsigned()->nullable();
            $table->foreign('location_id')
                  ->references('id')->on('locations')
                  ->onDelete('set null');
            $table->integer('user_name')->unsigned()->nullable();
            $table->foreign('user_name')
                  ->references('firstname')->on('users')
                  ->onDelete('cascade');
            $table->integer('category_name')->unsigned()->nullable();
            $table->foreign('category_name')
                  ->references('name')->on('categories')
                  ->onDelete('set null');
            $table->integer('location_name')->unsigned()->nullable();
            $table->foreign('location_name')
                  ->references('name')->on('locations')
                  ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adverts', function (Blueprint $table) {
            $table->dropColumn('user_id');
            $table->dropColumn('category_id');
            $table->dropColumn('location_id');
            $table->dropColumn('user_name');
            $table->dropColumn('category_name');
            $table->dropColumn('location_name');
        });
    }
}
