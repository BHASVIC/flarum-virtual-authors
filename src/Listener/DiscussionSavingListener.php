<?php

namespace Davwheat\VirtualAuthors\Listener;

use Flarum\Discussion\Event\Saving;

class DiscussionSavingListener
{
    public function handle(Saving $event)
    {
        dd($event->data['relationships']);
    }
}
