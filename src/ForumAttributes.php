<?php

namespace Davwheat\VirtualAuthors;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer, $forum, array $attributes)
    {
        // Allow setting to override permission
        $attributes['canViewVirtualAuthorsPage'] = !($this->settings->get('davwheat-virtual-authors.virtual-authors-page-disabled', false)) && $serializer->getActor()->can('viewVirtualAuthorsPage');

        return $attributes;
    }
}
