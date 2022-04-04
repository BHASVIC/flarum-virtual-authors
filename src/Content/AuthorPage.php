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

class AuthorPage extends Index
{
    /**
     * @var VirtualAuthorRepository
     */
    private $repository;

    public function __construct(Client $api, Factory $view, SettingsRepositoryInterface $settings, UrlGenerator $url, TranslatorInterface $translator, VirtualAuthorRepository $repository)
    {
        parent::__construct($api, $view, $settings, $url, $translator);

        $this->repository = $repository;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        // Disable access to the page if the author pages feature is disabled
        if (!$this->settings->get('davwheat-virtual-authors.virtual-author-pages', true)) {
            throw new RouteNotFoundException("Virtual author pages are disabled by the extension settings.");
        }

        $queryParams = $request->getQueryParams();

        $id = Arr::pull($queryParams, 'slug');
        $virtualAuthor = $this->repository->findOrFail($id);

        // Prevent searching with q on this page
        Arr::pull($queryParams, 'q');

        $request = $request->withQueryParams(
            ['filter' => array_merge($queryParams, ['virtual-author' => $id])]
        );

        // Fetch discussion info from the API using our custom filter
        $document = parent::__invoke($document, $request);

        // Ensure VA model is loaded in the preloaded API payload
        // This is only needed when there are no linked discussions, since
        // then it won't be included through discussion relations
        $va = json_decode($this->api->withParentRequest($request)->get('/virtualAuthors/' . $id)->getBody())->data;
        $document->payload['apiDocument']->data[] = $va;

        // Set correct meta title
        $document->title = $this->translator->trans('davwheat-virtual-authors.forum.virtual_author_page.meta_title', [
            'displayName' => $virtualAuthor->display_name
        ]);

        return $document;
    }
}
