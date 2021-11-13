<?php

namespace Davwheat\ManualBlogAuthors\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Davwheat\ManualBlogAuthors\VirtualAuthor;
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
            'displayName' => $model->displayName,
            'description' => $model->description,
        ];

        if ($model->pivot) {
            $attributes['credit'] = $model->pivot->credit;
        }

        return $attributes;
    }
}
