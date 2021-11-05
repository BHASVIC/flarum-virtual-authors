<?php

namespace BHASVIC\ManualBlogAuthors\Access;

use BHASVIC\ManualBlogAuthors\VirtualAuthor;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class VirtualAuthorPolicy extends AbstractPolicy
{
    public function can(User $actor, string $ability, VirtualAuthor $model)
    {
        // See https://docs.flarum.org/extend/authorization.html#custom-policies for more information.
    }
}
