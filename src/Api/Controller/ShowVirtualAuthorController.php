<?php

namespace Davwheat\ManualBlogAuthors\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Davwheat\ManualBlogAuthors\Api\Serializer\VirtualAuthorSerializer;
use Davwheat\ManualBlogAuthors\VirtualAuthor;
use Davwheat\ManualBlogAuthors\VirtualAuthorRepository;

class ShowVirtualAuthorController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = VirtualAuthorSerializer::class;

    /**
     * @var VirtualAuthorRepository
     */
    public $repository;

    public function __construct(VirtualAuthorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $modelId = Arr::get($request->getQueryParams(), 'id');

        return $this->repository->findOrFail($modelId, $actor);
    }
}
