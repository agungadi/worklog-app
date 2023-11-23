<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorklogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('worklogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('deskripsi')->nullable();
            $table->string('status')->default('todo'); // Kategori: todo, in progress, complete
            $table->date('tanggal')->nullable();
            $table->string('lokasi')->nullable();
            $table->integer('waktu')->default(0);
            $table->decimal('poin', 10, 2)->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('project_id')->nullable();

            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('worklogs');
    }
}
