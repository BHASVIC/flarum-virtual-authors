<?php

namespace Davwheat\VirtualAuthors;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Davwheat\VirtualAuthors\VirtualAuthor;

class VirtualAuthorRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return VirtualAuthor::withCount('discussions');
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

    /**
     * @param int $id
     * @param User $actor
     * @return VirtualAuthor
     */
    public function find($id, User $actor = null): VirtualAuthor
    {
        return VirtualAuthor::find($id);
    }
}
