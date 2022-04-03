<?php

namespace Davwheat\VirtualAuthors;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;

/**
 * @property string $display_name
 * @property string $description
 */
class VirtualAuthor extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.

    protected $table = 'virtual_authors';
    protected $primaryKey = 'id';


    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'display_name' => '',
        'description' => '',
    ];


    public static function build(string $display_name, ?string $description)
    {
        $model = new static;

        $model->display_name = $display_name;
        $model->description = $description ?? '';

        return $model;
    }

    public function discussions()
    {
        return $this->belongsToMany(Discussion::class, 'discussion_virtual_author', 'virtual_author_id', 'discussion_id');
    }
}
