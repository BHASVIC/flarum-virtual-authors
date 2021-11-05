<?php

namespace BHASVIC\ManualBlogAuthors\Command;

use Illuminate\Support\Arr;
use BHASVIC\ManualBlogAuthors\VirtualAuthorRepository;

class DeleteVirtualAuthorHandler
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $repository;

    public function __construct(VirtualAuthorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handle(DeleteVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('...');

        // ...

        return $model;
    }
}
