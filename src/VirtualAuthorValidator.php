<?php

namespace Davwheat\ManualBlogAuthors;

use Flarum\Foundation\AbstractValidator;

class VirtualAuthorValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'displayName' => ['min:3', 'max:255', 'required'],
        'description' => ['max:65534']
    ];
}
