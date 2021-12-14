<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('virtual_authors', function (Blueprint $table) {
            $table->index(['display_name']);
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('virtual_authors', function (Blueprint $table) {
            $table->dropIndex(['display_name']);
        });
    }
];
