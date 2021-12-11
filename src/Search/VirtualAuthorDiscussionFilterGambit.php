<?php

namespace Davwheat\VirtualAuthors\Search;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Illuminate\Database\Query\Builder;

class VirtualAuthorDiscussionFilterGambit extends AbstractRegexGambit implements FilterInterface
{
    protected function getGambitPattern()
    {
        return 'virtual-author:(.+)';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $this->constrain($search->getQuery(), $matches[1], $negate);
    }

    public function getFilterKey(): string
    {
        return 'virtual-author';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $this->constrain($filterState->getQuery(), $filterValue, $negate);
    }

    protected function constrain(Builder $query, $rawIds, $negate)
    {
        $ids = explode(',', $rawIds);

        $query->where(function (Builder $query) use ($ids, $negate) {
            foreach ($ids as $id) {
                $query->whereIn('discussions.id', function (Builder $query) use ($id) {
                    $query->select('discussion_id')
                        ->from('discussion_virtual_author')
                        ->where('virtual_author_id', $id);
                }, 'or', $negate);
            }
        });
    }
}
