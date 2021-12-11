<?php

namespace Davwheat\VirtualAuthors\Search;

use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Flarum\Search\AbstractSearcher;
use Flarum\Search\GambitManager;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\Eloquent\Builder;

class VirtualAuthorSearcher extends AbstractSearcher
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $virtualAuthors;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param VirtualAuthorRepository $virtualAuthors
     * @param Dispatcher $events
     * @param GambitManager $gambits
     * @param array $searchMutators
     */
    public function __construct(VirtualAuthorRepository $virtualAuthors, Dispatcher $events, GambitManager $gambits, array $searchMutators)
    {
        parent::__construct($gambits, $searchMutators);

        $this->virtualAuthors = $virtualAuthors;
        $this->events = $events;
    }

    protected function getQuery(User $actor): Builder
    {
        return $this->virtualAuthors->query()->select('virtualAuthors.*')->whereVisibleTo($actor);
    }
}
