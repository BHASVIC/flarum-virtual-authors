<?php

namespace Davwheat\ManualBlogAuthors\Command;

use Carbon\Carbon;
use Davwheat\ManualBlogAuthors\Event\UpdatingVirtualAuthor;
use Davwheat\ManualBlogAuthors\VirtualAuthor;
use Illuminate\Support\Arr;
use Davwheat\ManualBlogAuthors\VirtualAuthorRepository;
use Davwheat\ManualBlogAuthors\VirtualAuthorValidator;

class EditVirtualAuthorHandler
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $repository;

    /**
     * @var VirtualAuthorValidator
     */
    protected $validator;

    public function __construct(VirtualAuthorRepository $repository, VirtualAuthorValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }

    public function handle(EditVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('administrateVirtualAuthors');

        $model = $this->repository->findOrFail($data['id']);

        if (Arr::has($data, 'attributes.displayName')) {
            $model->displayName = $data['attributes']['displayName'];
        }

        if (Arr::has($data, 'attributes.description')) {
            $model->description = $data['attributes']['description'];
        }

        event(new UpdatingVirtualAuthor($model, $actor, $data));

        $this->validator->assertValid($model->getAttributes());

        $model->setUpdatedAt(Carbon::now())->save();

        return $model;
    }
}
