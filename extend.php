<?php

/*
 * This file is part of davwheat/manual-blog-authors.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\ManualBlogAuthors;

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
        ->modelPolicy(VirtualAuthor::class, Access\VirtualAuthorPolicy::class)
        ->globalPolicy(Access\GlobalPolicy::class),

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

    (new Extend\ApiSerializer(\Flarum\Api\Serializer\DiscussionSerializer::class))
        ->attributes(function (\Flarum\Api\Serializer\DiscussionSerializer $serializer, Discussion $model, array $attributes) {
            $attributes['canSetVirtualAuthors'] = $serializer->getActor()->can('discussion.setVirtualAuthors', $model);
            return $attributes;
        })
        ->relationship('virtualAuthors', function (\Flarum\Api\Serializer\DiscussionSerializer $serializer, Discussion $model) {
            // return $model->belongsToMany(VirtualAuthor::class, 'discussion_virtual_author', 'discussion_id', 'virtual_author_id')
            //     ->withPivot('credit');
        }),

    (new Extend\ApiController(\Flarum\Api\Controller\ShowDiscussionController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(\Flarum\Api\Controller\CreateDiscussionController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(FlarumController\ListPostsController::class))
        ->load('discussion.virtualAuthors'),

    (new Extend\Event())
        ->listen(\Flarum\Discussion\Event\Saving::class, Listener\DiscussionSavingListener::class),
];
