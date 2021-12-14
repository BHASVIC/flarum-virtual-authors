<?php

namespace Davwheat\VirtualAuthors\Command;

use Carbon\Carbon;
use Davwheat\VirtualAuthors\Event\UpdatingVirtualAuthor;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Davwheat\VirtualAuthors\VirtualAuthorValidator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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

    /**
     * @var Dispatcher
     */
    protected $bus;

    public function __construct(VirtualAuthorRepository $repository, VirtualAuthorValidator $validator, Dispatcher $bus)
    {
        $this->repository = $repository;
        $this->validator = $validator;
        $this->bus = $bus;
    }

    public function handle(EditVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('administrateVirtualAuthors');

        $model = $this->repository->find($data['id']);

        if ($model === null) {
            throw new ModelNotFoundException();
        }

        if (Arr::has($data, 'attributes.displayName')) {
            $model->display_name = $data['attributes']['displayName'];
        }

        if (Arr::has($data, 'attributes.description')) {
            $model->description = $data['attributes']['description'];
        }

        $this->bus->dispatch(new UpdatingVirtualAuthor($model, $actor, $data));

        $this->validator->assertValid($model->getAttributes());

        return $model->setUpdatedAt(Carbon::now())->save();
    }
}
