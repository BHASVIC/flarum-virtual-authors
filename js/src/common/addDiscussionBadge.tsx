import app from 'flarum/common/app';
import { extend } from 'flarum/common/extend';

import Discussion from 'flarum/common/models/Discussion';
import ItemList from 'flarum/common/utils/ItemList';
import Badge from 'flarum/common/components/Badge';

import type Mithril from 'mithril';

export default function addDiscussionBadge() {
  extend(Discussion.prototype, 'badges', function (this: Discussion, badges: ItemList<Mithril.Children>) {
    if (!app.forum.attribute('davwheat-virtual-authors.discussion-badge')) return;

    if (this.virtualAuthors()?.length) {
      const isMultiple = this.virtualAuthors().length > 1;

      badges.add(
        'hasVirtualAuthor',
        <Badge
          type="hasVirtualAuthor"
          icon={isMultiple ? 'fas fa-users' : 'fas fa-user'}
          label={app.translator.trans('davwheat-virtual-authors.lib.discussion-badge', { count: this.virtualAuthors().length })}
        />
      );
    }
  });
}
