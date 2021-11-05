<?php

namespace BHASVIC\ManualBlogAuthors\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use BHASVIC\ManualBlogAuthors\Command\DeleteVirtualAuthor;
use BHASVIC\ManualBlogAuthors\Api\Serializer\VirtualAuthorSerializer;

class DeleteVirtualAuthorController extends AbstractDeleteController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = VirtualAuthorSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }


    /**
     * {@inheritdoc}
     */
    protected function delete(ServerRequestInterface $request)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);
        $actor->assertAdmin();

        $modelId = Arr::get($request->getQueryParams(), 'id');
        $input = $request->getParsedBody();

        $this->bus->dispatch(
            new DeleteVirtualAuthor($modelId, $actor, $input)
        );
    }
}
