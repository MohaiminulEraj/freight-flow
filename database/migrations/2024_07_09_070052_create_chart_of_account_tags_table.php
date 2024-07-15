<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chart_of_account_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chart_of_account_id')->constrained('chart_of_accounts')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('tag_id')->constrained('tags')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chart_of_account_tags');
    }
};
