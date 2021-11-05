<?php

namespace BHASVIC\ManualBlogAuthors\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use BHASVIC\ManualBlogAuthors\VirtualAuthor;
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

        // See https://docs.flarum.org/extend/api.html#serializers for more information.

        return [
            // ...
        ];
    }
}
