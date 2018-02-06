<?php
    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;
    class AddForignkeyAnswers extends Migration{
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up(){
            Schema::table('answers', function(Blueprint $table){
                $table->integer('advert_id')->unsigned()->nullable();
                $table->foreign('advert_id')
                      ->references('id')->on('adverts')
                      ->onDelete('cascade');
                $table->integer('advert_title')->unsigned()->nullable();
                $table->foreign('advert_title')
                      ->references('title')->on('adverts')
                      ->onDelete('cascade');
        });
        }
        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down(){
            Schema::table('answers', function(Blueprint $table){
                $table->dropColumn('advert_id');
                $table->dropColumn('advert_title');
            });
        }
    }
