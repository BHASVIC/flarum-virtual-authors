<?php

namespace Davwheat\VirtualAuthors\Listener;

use Flarum\Discussion\Event\Saving;
use Illuminate\Support\Arr;

class DiscussionSavingListener
{
    public function handle(Saving $event)
    {
        // If we're not saving any relationships, this sure as hell isn't for us to deal with!
        if (!Arr::exists($event->data, 'relationships')) {
            return;
        }

        // However, if we are saving VA relationships, this is our job, sir!
        if (Arr::exists($event->data['relationships'], 'virtualAuthors')) {
            $discussion = $event->discussion;

            $event->actor->assertCan('setVirtualAuthors', $discussion);

            $virtualAuthors = $event->data['relationships']['virtualAuthors'];

            // If `data` key exists, we're saving a list of VAs, otherwise we've removed all the VAs from the discussion
            if (Arr::exists($virtualAuthors, 'data')) {
                $virtualAuthors = $virtualAuthors['data'];

                $data = [];

                // If this key exists, we're also saving custom credits for these VAs
                if (Arr::exists($event->data['attributes'], 'virtualAuthorsCredit')) {
                    /** @var array */
                    foreach ($event->data['attributes']['virtualAuthorsCredit'] as $id => $credit) {
                        // Set the credit for this VA's ID
                        $data[$id] = ['credit' => $credit];
                    }
                }

                // Add VA entries for every VA that doesn't have credits set
                foreach ($virtualAuthors as $virtualAuthor) {
                    if (!Arr::exists($data, $virtualAuthor['id'])) {
                        $data[] = $virtualAuthor['id'];
                    }
                }

                // Save the relationship

                /** @var \Illuminate\Database\Eloquent\Relations\BelongsToMany */
                $relationship = $discussion->virtualAuthors();
                $relationship->sync($data);
            } else {
                // VA list is empty, meaning we've removed all the VAs from the discussion

                /** @var \Illuminate\Database\Eloquent\Relations\BelongsToMany */
                $relationship = $discussion->virtualAuthors();
                $relationship->detach();
            }
        }
    }
}
