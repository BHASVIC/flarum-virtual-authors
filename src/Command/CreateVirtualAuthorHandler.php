<?php

namespace BHASVIC\ManualBlogAuthors\Command;

use Illuminate\Support\Arr;
use BHASVIC\ManualBlogAuthors\VirtualAuthorRepository;
use BHASVIC\ManualBlogAuthors\VirtualAuthorValidator;

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

        $actor->assertCan('...');

        // ...

        return $model;
    }
}
