<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // prevent duplicating migration
        if ($schema->hasTable('virtual_authors')) {
            return;
        }

        $schema->create(
            'virtual_authors',
            function (Blueprint $table) {
                // auto-incrementing primary key
                $table->increments('id');

                // virtual author name
                $table->string('displayName')->index();

                // virtual author description
                $table->longText('description');

                // created_at & updated_at
                $table->timestamps();
            }
        );
    },
    'down' => function (Builder $schema) {
        // delete the table if reverting the migration
        $schema->dropIfExists('virtual_authors');
    }
];
