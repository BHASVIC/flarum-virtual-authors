<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('discussion_virtual_author')) {
            return;
        }

        $schema->create(
            'discussion_virtual_author',
            function (Blueprint $table) {
                $table->increments('id');

                $table->integer('discussion_id')->unsigned();
                $table->integer('virtual_author_id')->unsigned();

                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();

                $table->string('credit');

                $table->foreign('discussion_id', 'discussion_virtual_author_va_id_d_id_index')
                    ->references('id')
                    ->on('discussions')
                    ->onDelete('cascade');

                $table->foreign('virtual_author_id', 'discussion_virtual_author_d_id_va_id_index')
                    ->references('id')
                    ->on('virtual_authors')
                    ->onDelete('cascade');

                $table->index(['discussion_id', 'virtual_author_id']);
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('discussion_virtual_author');
    }
];
