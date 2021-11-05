<?php

/*
 * This file is part of bhasvic/manual-blog-authors.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BHASVIC\ManualBlogAuthors;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Policy())
        ->modelPolicy(VirtualAuthor::class, Access\VirtualAuthorPolicy::class),
    (new Extend\Routes('api'))
        ->get('/virtualAuthors', 'virtualAuthors.index', Api\Controller\ListVirtualAuthorsController::class)
        ->get('/virtualAuthors/{id}', 'virtualAuthors.show', Api\Controller\ShowVirtualAuthorController::class)
        ->post('/virtualAuthors', 'virtualAuthors.create', Api\Controller\CreateVirtualAuthorController::class)
        ->patch('/virtualAuthors/{id}', 'virtualAuthors.update', Api\Controller\UpdateVirtualAuthorController::class)
        ->delete('/virtualAuthors/{id}', 'virtualAuthors.delete', Api\Controller\DeleteVirtualAuthorController::class),
    (new Extend\Model(Discussion::class))
        ->relationship('virtualAuthors', function (AbstractModel $model) {
            return $model->belongsToMany(VirtualAuthor::class, 'discussion_virtual_author', 'discussion_id', 'virtual_author_id')
                ->withPivot('credit');
        }),
];
