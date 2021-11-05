<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('virtual_authors')) {
            return;
        }

        $schema->create(
            'virtual_authors',
            function (Blueprint $table) {
                $table->increments('id');

                $table->string('displayName');
                $table->longText('description');

                // created_at & updated_at
                $table->timestamps();
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('virtual_authors');
    }
];
