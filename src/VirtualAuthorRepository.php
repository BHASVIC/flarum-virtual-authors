<?php

namespace Davwheat\ManualBlogAuthors;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Davwheat\ManualBlogAuthors\VirtualAuthor;

class VirtualAuthorRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return VirtualAuthor::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return VirtualAuthor
     */
    public function findOrFail($id, User $actor = null): VirtualAuthor
    {
        return VirtualAuthor::findOrFail($id);
    }
}
