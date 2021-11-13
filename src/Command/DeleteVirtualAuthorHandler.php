<?php

namespace Davwheat\ManualBlogAuthors\Command;

use Davwheat\ManualBlogAuthors\Event\DeletingVirtualAuthor;
use Davwheat\ManualBlogAuthors\VirtualAuthorRepository;
use Illuminate\Contracts\Events\Dispatcher;

class DeleteVirtualAuthorHandler
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $repository;

    /**
     * @var Dispatcher
     */
    protected $events;

    public function __construct(VirtualAuthorRepository $repository, Dispatcher $dispatcher)
    {
        $this->repository = $repository;
        $this->events = $dispatcher;
    }

    public function handle(DeleteVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('administrateVirtualAuthors');

        $model = $this->repository->findOrFail($command->modelId);

        $this->events->dispatch(new DeletingVirtualAuthor($model, $actor, $data));

        $model->deleteOrFail();

        return $model;
    }
}
