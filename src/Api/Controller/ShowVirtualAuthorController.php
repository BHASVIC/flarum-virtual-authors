<?php

namespace Davwheat\VirtualAuthors\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Davwheat\VirtualAuthors\Api\Serializer\VirtualAuthorSerializer;
use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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

        /**
         * @var ?\Davwheat\VirtualAuthors\VirtualAuthor
         */
        $model = $this->repository->find($modelId, $actor);

        if ($model === null) {
            throw new ModelNotFoundException();
        }

        return $model;
    }
}
