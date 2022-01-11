import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import icon from 'flarum/common/helpers/icon';
import ItemList from 'flarum/common/utils/ItemList';
import app from 'flarum/forum/app';

import type Mithril from 'mithril';
import type VirtualAuthor from 'src/common/VirtualAuthor';

interface IAttrs {
  data: VirtualAuthor;
}

export default class VirtualAuthorsListItem extends Component<IAttrs> {
  view(vnode: Mithril.Vnode<IAttrs, this>) {
    return <div class="VirtualAuthorsListItem">{this.items().toArray()}</div>;
  }

  items(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'name',
      <h3 class="VirtualAuthorsListItem-name">
        <Link href={app.route('virtualAuthors.author', { slug: this.attrs.data.id() })}>{this.attrs.data.displayName()}</Link>
      </h3>,
      100
    );

    items.add(
      'description',
      <p class="VirtualAuthorsListItem-description">
        {this.attrs.data.description() || <i>{app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.no_description')}</i>}
      </p>,
      80
    );

    items.add(
      'discussionCount',
      <p class="VirtualAuthorsListItem-discussionCount">
        {icon('fas fa-comments')}{' '}
        {app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.discussion_count', {
          count: this.attrs.data.discussionCount(),
        })}
      </p>,
      60
    );

    return items;
  }
}
