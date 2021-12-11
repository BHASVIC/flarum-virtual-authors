<?php

namespace Davwheat\VirtualAuthors\Filter;

use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class VirtualAuthorFilterer extends AbstractFilterer
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $virtualAuthors;

    /**
     * @param VirtualAuthorRepository $virtualAuthors
     * @param array $filters
     * @param array $filterMutators
     */
    public function __construct(VirtualAuthorRepository $virtualAuthors, array $filters, array $filterMutators)
    {
        parent::__construct($filters, $filterMutators);

        $this->virtualAuthors = $virtualAuthors;
    }

    protected function getQuery(User $actor): Builder
    {
        return $this->virtualAuthors->query()->select('virtualAuthors.*')->whereVisibleTo($actor);
    }
}