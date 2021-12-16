<?php

namespace Davwheat\VirtualAuthors\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Davwheat\VirtualAuthors\VirtualAuthor;
use InvalidArgumentException;

class VirtualAuthorSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'virtualAuthors';

    /**
     * {@inheritdoc}
     *
     * @param VirtualAuthor $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($model)
    {
        if (! ($model instanceof VirtualAuthor)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.VirtualAuthor::class
            );
        }

        $attributes = [
            'displayName' => $model->display_name,
            'description' => $model->description,
            'discussionCount' => $model->discussion_count,
        ];

        if ($model->pivot) {
            $attributes['credit'] = $model->pivot->credit;
        }

        return $attributes;
    }
}
