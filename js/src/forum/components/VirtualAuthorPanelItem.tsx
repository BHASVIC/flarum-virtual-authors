import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import ItemList from 'flarum/common/utils/ItemList';
import classList from 'flarum/common/utils/classList';

import type VirtualAuthor from '../../common/VirtualAuthor';
import type Mithril from 'mithril';
import Tooltip from 'flarum/common/components/Tooltip';

interface IAttrs {
  virtualAuthor: VirtualAuthor;
}

export default class VirtualAuthorPanelItem extends Component<IAttrs> {
  view() {
    return <li>{this.wrapWithLink(this.items().toArray())}</li>;
  }

  className() {
    return classList('VirtualAuthorPanelItem', {
      'VirtualAuthorPanelItem--clickable': !!this.link(),
    });
  }

  wrapWithLink(content: Mithril.Children) {
    const link = this.link();

    if (!link) {
      content.attrs.class = this.className();
      return content;
    }

    return (
      <Tooltip
        text={app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_panel.item_link_tooltip', {
          displayName: this.attrs.virtualAuthor.displayName(),
        })}
      >
        <Link class={this.className()} href={link}>
          {content}
        </Link>
      </Tooltip>
    );
  }

  link() {
    if (!app.forum.attribute('davwheat-virtual-authors.link-to-virtual-authors-from-discussion')) return false;

    return app.route('virtualAuthors.author', { slug: this.attrs.virtualAuthor.id() });
  }

  items() {
    const items = new ItemList<Mithril.Children>();
    const va = this.attrs.virtualAuthor;

    items.add('name', <h3 class="VirtualAuthorPanelItem-displayName">{va.displayName()}</h3>, 100);
    if (va.credit()) items.add('credit', <p class="VirtualAuthorPanelItem-credit">{va.credit()}</p>, 50);

    return items;
  }
}
