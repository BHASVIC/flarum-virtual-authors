<?php

namespace Davwheat\VirtualAuthors\Content;

use Davwheat\VirtualAuthors\VirtualAuthor;
use Flarum\Forum\Content\Index;
use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class AuthorPage extends Index
{
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        if (!$this->settings->get('davwheat-virtual-authors.virtual-author-pages', true)) {
            throw new RouteNotFoundException("Virtual author pages are disabled by the extension settings.");
        }

        $queryParams = $request->getQueryParams();

        $id = Arr::pull($queryParams, 'slug');
        $virtualAuthor = VirtualAuthor::findOrFail($id);

        Arr::pull($queryParams, 'q');

        $request = $request->withQueryParams(
            ['filter' => array_merge($queryParams, ['virtual-author' => $id])]
        );

        $document = parent::__invoke($document, $request);

        $document->title = $this->translator->trans('davwheat-virtual-authors.forum.virtual_author_page.meta_title', [
            'displayName' => $virtualAuthor->displayName
        ]);

        return $document;
    }
}
