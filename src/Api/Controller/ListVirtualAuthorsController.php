<?php

namespace BHASVIC\ManualBlogAuthors\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use BHASVIC\ManualBlogAuthors\Api\Serializer\VirtualAuthorSerializer;
use BHASVIC\ManualBlogAuthors\VirtualAuthor;
use BHASVIC\ManualBlogAuthors\VirtualAuthorRepository;
use Illuminate\Support\Arr;

class ListVirtualAuthorsController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = VirtualAuthorSerializer::class;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var VirtualAuthorRepository
     */
    protected $virtualAuthors;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(UrlGenerator $url, VirtualAuthorRepository $virtualAuthors)
    {
        $this->url = $url;
        $this->virtualAuthors = $virtualAuthors;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);

        $filters = $this->extractFilter($request);
        // $sort = $this->extractSort($request);

        // $limit = $this->extractLimit($request);
        // $offset = $this->extractOffset($request);
        // $include = $this->extractInclude($request);

        // ...
        $query = $this->virtualAuthors->query();

        if (Arr::has($filters, 'name')) {
            $actor->assertAdmin();

            $query = $query->where('name', 'like', $filters['name'] . '%');
        }

        $results = $query->get();

        // $document->addPaginationLinks(
        //     $this->url->to('api')->route('virtualAuthors.index'),
        //     $request->getQueryParams(),
        //     $offset,
        //     $limit,
        //     $results->areMoreResults() ? null : 0
        // );

        return $results;
    }
}
