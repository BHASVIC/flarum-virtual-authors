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
        $query->where('display_name', 'like', '%' . $this->escapeLikeString($name) . '%', 'or', $negate);
    }

    /**
     * Escape special characters that can be used as wildcards in a LIKE query.
     *
     * @param string $string
     * @return string
     */
    private function escapeLikeString($string)
    {
        return str_replace(['\\', '%', '_'], ['\\\\', '\%', '\_'], $string);
    }
}
