<?php

namespace Davwheat\VirtualAuthors\Content;

use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Flarum\Api\Client;
use Flarum\Forum\Content\Index;
use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

class AuthorsList
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var Factory
     */
    protected $view;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var VirtualAuthorRepository
     */
    private $repository;

    public function __construct(Client $api, Factory $view, SettingsRepositoryInterface $settings, UrlGenerator $url, TranslatorInterface $translator, VirtualAuthorRepository $repository)
    {
        $this->api = $api;
        $this->view = $view;
        $this->settings = $settings;
        $this->url = $url;
        $this->translator = $translator;
        $this->repository = $repository;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        if ($this->settings->get('davwheat-virtual-authors.virtual-authors-page-disabled', false)) {
            throw new RouteNotFoundException("Virtual author pages are disabled by the extension settings.");
        }

        $queryParams = $request->getQueryParams();

        $filters = Arr::pull($queryParams, 'filter', []);
        $page = max(1, intval(Arr::pull($queryParams, 'page')));

        $params = [
            'filter' => $filters,
            'page' => ['offset' => ($page - 1) * 20, 'limit' => 20]
        ];

        $apiDocument = $this->getApiDocument($request, $params);

        $document->title = $this->translator->trans('davwheat-virtual-authors.forum.virtual_authors_list.meta_title');
        $document->content = $this->view->make('flarum.forum::frontend.content.index', compact('apiDocument', 'page'));
        $document->payload['apiDocument'] = $apiDocument;

        $document->canonicalUrl = $this->url->to('forum')->base() . $request->getUri()->getPath();
        $document->page = 1;
        $document->hasNextPage = isset($apiDocument->links->next);

        return $document;
    }

    /**
     * Get the result of an API request to list virtual authors.
     *
     * @param Request $request
     * @param array $params
     * @return object
     */
    protected function getApiDocument(Request $request, array $params)
    {
        return json_decode($this->api->withParentRequest($request)->withQueryParams($params)->get('/virtualAuthors')->getBody());
    }
}
