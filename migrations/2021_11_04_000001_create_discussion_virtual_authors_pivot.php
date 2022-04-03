<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // prevent duplicating migration
        if ($schema->hasTable('discussion_virtual_author')) {
            return;
        }

        $schema->create(
            'discussion_virtual_author',
            function (Blueprint $table) {
                // auto-incrementing primary key
                $table->increments('id');

                $table->integer('discussion_id')->unsigned();
                $table->integer('virtual_author_id')->unsigned();

                // created_at & updated_at - have to use a different method
                // since Laravel doesn't automatically update these like it
                // does with model tables
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();

                // pivot value -- credit per discussion
                $table->string('credit');

                // relationship: links discussion id in this table with the
                // IDs in the discussions table
                $table->foreign('discussion_id', 'discussion_virtual_author_va_id_d_id_index')
                    ->references('id')
                    ->on('discussions')
                    ->onDelete('cascade');

                // relationship: links virtual author id in this table with the
                // IDs in the virtual authors table
                $table->foreign('virtual_author_id', 'discussion_virtual_author_d_id_va_id_index')
                    ->references('id')
                    ->on('virtual_authors')
                    ->onDelete('cascade');

                // create composite index of discussion and VA ids
                $table->index(['discussion_id', 'virtual_author_id'], 'discussion_virtual_author_index');
            }
        );
    },
    'down' => function (Builder $schema) {
        // delete the table if reverting the migration
        $schema->dropIfExists('discussion_virtual_author');
    }
];
