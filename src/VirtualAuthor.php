<?php

namespace Davwheat\ManualBlogAuthors;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Foundation\EventGeneratorTrait;

/**
 * @property string $displayName
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
        'displayName' => '',
        'description' => '',
    ];


    public static function build($displayName, $description)
    {
        $model = new static;

        $model->displayName = $displayName;
        $model->description = $description;

        dd($model);

        return $model;
    }

    public function discussions()
    {
        return $this->belongsToMany(Discussion::class);
    }
}
