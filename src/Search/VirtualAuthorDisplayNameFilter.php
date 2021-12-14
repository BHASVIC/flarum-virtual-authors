<?php

namespace Davwheat\VirtualAuthors\Search;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Illuminate\Database\Query\Builder;

class VirtualAuthorDisplayNameFilter implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'displayName';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $this->constrain($filterState->getQuery(), $filterValue, $negate);
    }

    protected function constrain(Builder $query, $name, $negate)
    {
        $query->where('display_name', 'like', '%' . $name . '%', 'or', $negate);
    }
}
