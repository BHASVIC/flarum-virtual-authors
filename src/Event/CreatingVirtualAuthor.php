<?php

namespace Davwheat\VirtualAuthors\Event;

use Davwheat\VirtualAuthors\VirtualAuthor;
use Flarum\User\User;

class CreatingVirtualAuthor
{
    /**
     * @var VirtualAuthor
     */
    public $virtualAuthor;

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
