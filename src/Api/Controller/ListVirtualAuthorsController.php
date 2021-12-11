<?php

namespace Davwheat\VirtualAuthors\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Davwheat\VirtualAuthors\Api\Serializer\VirtualAuthorSerializer;
use Davwheat\VirtualAuthors\Filter\VirtualAuthorFilterer;
use Davwheat\VirtualAuthors\Search\VirtualAuthorSearcher;
use Davwheat\VirtualAuthors\VirtualAuthor;
use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Flarum\Query\QueryCriteria;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ListVirtualAuthorsController extends AbstractListController
{
    /**
     * {@inheritDoc}
     */
    public $sort = ['displayName' => 'desc'];

    /**
     * {@inheritdoc}
     */
    public $sortFields = ['displayName', 'discussionCount'];

    /**
     * {@inheritdoc}
     */
    public $limit = 25;

    /**
     * {@inheritdoc}
     */
    public $maxLimit = 50;

    /**
     * {@inheritdoc}
     */
    public $serializer = VirtualAuthorSerializer::class;

    // --------------------------------------------------------------

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var VirtualAuthorRepository
     */
    protected $virtualAuthors;

    /**
     * @var VirtualAuthorFilterer
     */
    protected $filterer;

    /**
     * @var VirtualAuthorSearcher
     */
    protected $searcher;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(VirtualAuthorFilterer $filterer, VirtualAuthorSearcher $searcher, UrlGenerator $url, VirtualAuthorRepository $virtualAuthors)
    {
        $this->filterer = $filterer;
        $this->searcher = $searcher;
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
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);
        if (array_key_exists('q', $filters)) {
            $results = $this->searcher->search($criteria, $limit, $offset);
        } else {
            $results = $this->filterer->filter($criteria, $limit, $offset);
        }

        $document->addPaginationLinks(
            $this->url->to('api')->route('virtualAuthors.index'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        $results = $results->getResults();

        return $results;
    }
}
