<?php

namespace Davwheat\ManualBlogAuthors\Command;

use Davwheat\ManualBlogAuthors\VirtualAuthor;
use Davwheat\ManualBlogAuthors\Event\CreatingVirtualAuthor;
use Davwheat\ManualBlogAuthors\VirtualAuthorRepository;
use Davwheat\ManualBlogAuthors\VirtualAuthorValidator;
use Illuminate\Support\Arr;

class CreateVirtualAuthorHandler
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

    public function handle(CreateVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('administrateVirtualAuthors');

        $model = VirtualAuthor::build(
            Arr::get($data, 'attributes.displayName'),
            Arr::get($data, 'attributes.description'),
        );

        event(new CreatingVirtualAuthor($model, $actor, $data));

        $this->validator->assertValid($model->getAttributes());

        $model->save();

        return $model;
    }
}
