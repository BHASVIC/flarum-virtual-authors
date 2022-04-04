<?php

namespace Davwheat\VirtualAuthors\Search;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Illuminate\Database\Query\Builder;

class VirtualAuthorDisplayNameFilter implements FilterInterface
{
    /**
     * The filter key to use in requests to trigger this filterer.
     */
    public function getFilterKey(): string
    {
        return 'displayName';
    }

    /**
     * Performs the actual filtering of data by modifying a query object.
     */
    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $this->constrain($filterState->getQuery(), $filterValue, $negate);
    }

    /**
     * Constrains a query object.
     */
    protected function constrain(Builder $query, $name, $negate)
    {
        $query->where('display_name', 'like', '%' . $this->escapeLikeString($name) . '%', 'or', $negate);
    }

    /**
     * Escape special characters that can be used as wildcards in a LIKE query.
     */
    private function escapeLikeString($string)
    {
        return str_replace(['\\', '%', '_'], ['\\\\', '\%', '\_'], $string);
    }
}
