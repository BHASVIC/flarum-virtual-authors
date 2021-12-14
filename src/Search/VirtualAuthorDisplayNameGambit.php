<?php

namespace Davwheat\VirtualAuthors\Search;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Illuminate\Database\Query\Builder;

class VirtualAuthorDisplayNameGambit extends AbstractRegexGambit implements FilterInterface
{
    protected function getGambitPattern()
    {
        return 'displayName:\"(.+)\"';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $this->constrain($search->getQuery(), $matches[1], $negate);
    }

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
        $query->where('display_name', 'like', '%' . $name . '%', 'or');
    }
}
