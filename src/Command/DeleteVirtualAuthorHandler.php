<?php

namespace Davwheat\VirtualAuthors\Command;

use Davwheat\VirtualAuthors\Event\DeletingVirtualAuthor;
use Davwheat\VirtualAuthors\VirtualAuthorRepository;
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

        return $model->delete();
    }
}
