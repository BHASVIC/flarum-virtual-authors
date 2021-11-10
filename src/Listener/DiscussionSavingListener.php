<?php

namespace Davwheat\ManualBlogAuthors\Listener;

use Flarum\Discussion\Event\Saving;

class DiscussionSavingListener
{
    public function handle(Saving $event)
    {
        // Add logic to handle the event here.
        // See https://docs.flarum.org/extend/backend-events.html for more information.
    }
}
