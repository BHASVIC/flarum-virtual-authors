<?php

namespace Davwheat\VirtualAuthors\Event;

use Davwheat\VirtualAuthors\VirtualAuthor;
use Flarum\User\User;

class CreatingVirtualAuthor
{
    /**
     * @var Tag
     */
    public $tag;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    /**
     * @param VirtualAuthor $virtualAuthor
     * @param User $actor
     * @param array $data
     */
    public function __construct(VirtualAuthor $virtualAuthor, User $actor, array $data)
    {
        $this->virtualAuthor = $virtualAuthor;
        $this->actor = $actor;
        $this->data = $data;
    }
}
