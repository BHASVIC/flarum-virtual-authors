<?php

namespace Davwheat\ManualBlogAuthors\Command;

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

        return $model;
    }
}
