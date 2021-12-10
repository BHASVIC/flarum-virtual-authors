import app from 'flarum/forum/app';

import extractText from 'flarum/common/utils/extractText';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import stringToColor from 'flarum/common/utils/stringToColor';
import listItems from 'flarum/common/helpers/listItems';

import type VirtualAuthor from '../../common/VirtualAuthor';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';

export default class VirtualAuthorIndexPage extends IndexPage {
  get virtualAuthor(): VirtualAuthor {
    return app.store.getById('virtualAuthors', this.attrs.slug);
  }

  hero() {
    const va = this.virtualAuthor;

    return (
      <div class="VirtualAuthorHero Hero" style={{ '--hero-bg': `#${stringToColor(va.displayName())}` }}>
        <div class="darkenBackground">
          <div class="container">
            <div class="VirtualAuthorHero-profile">
              <h2 class="VirtualAuthorHero-displayName">{va.displayName()}</h2>
              <p class="VirtualAuthorHero-description">{va.description()}</p>
            </div>
            <ul class="VirtualAuthorHero-meta">{listItems(this.heroMetaItems().toArray())}</ul>
          </div>
        </div>
      </div>
    );
  }

  heroMetaItems(): ItemList {
    const items = new ItemList();
    const va = this.virtualAuthor;

    items.add(
      'discussionCount',
      <span>
        {icon('fas fa-comments')}{' '}
        {app.translator.trans('davwheat-virtual-authors.forum.virtual_author_page.discussion_count', { count: va.discussionCount() })}
      </span>
    );

    return items;
  }

  setTitle() {
    app.setTitle(
      extractText(
        app.translator.trans('davwheat-virtual-authors.forum.virtual_author_page.meta_title', {
          displayName: this.virtualAuthor.displayName(),
        })
      )
    );
    app.setTitleCount(0);
  }

  view() {
    return (
      <div className="IndexPage VirtualAuthorPage">
        {this.hero()}
        <div className="container">
          <div className="IndexPage-results">
            <h3 class="VirtualAuthorPage-title">
              {app.translator.trans('davwheat-virtual-authors.forum.virtual_author_page.credited_discussions', {
                displayName: this.virtualAuthor.displayName(),
              })}
            </h3>
            <div className="IndexPage-toolbar">
              <ul className="IndexPage-toolbar-view">{listItems(this.viewItems().toArray())}</ul>
              <ul className="IndexPage-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
            </div>
            <DiscussionList state={app.discussions} />
          </div>
        </div>
      </div>
    );
  }
}
