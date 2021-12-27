import app from 'flarum/forum/app';

import extractText from 'flarum/common/utils/extractText';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import stringToColor from 'flarum/common/utils/stringToColor';
import listItems from 'flarum/common/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import Page from 'flarum/common/components/Page';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Discussion from 'flarum/common/models/Discussion';
import Button from 'flarum/common/components/Button';
import Dropdown from 'flarum/common/components/Dropdown';
import LinkButton from 'flarum/common/components/LinkButton';

import type VirtualAuthor from '../../common/VirtualAuthor';
import type Mithril from 'mithril';
import VirtualAuthorDiscussionListState from '../states/VirtualAuthorDiscussionListState';

export default class VirtualAuthorIndexPage extends Page {
  protected listState!: DiscussionListState;

  protected lastDiscussion!: Discussion | undefined;
  protected bodyClass!: string;
  protected scrollTopOnCreate!: boolean;

  get virtualAuthor(): VirtualAuthor {
    return app.store.getById('virtualAuthors', this.attrs.slug);
  }

  oninit(vnode) {
    super.oninit(vnode);

    // Directly use ID from URL instead of relying on model
    // Store will not be propagated on inital page load
    this.listState = new VirtualAuthorDiscussionListState(
      1,
      this.attrs.slug,
      app.preloadedApiDocument<Discussion[]>()
    );

    // If the user is returning from a discussion page, then take note of which
    // discussion they have just visited. After the view is rendered, we will
    // scroll down so that this discussion is in view.
    if (app.previous.matches(DiscussionPage)) {
      this.lastDiscussion = app.previous.get('discussion');
    }

    // If the user is coming from the discussion list, then they have either
    // just switched one of the parameters (filter, sort, search) or they
    // probably want to refresh the results. We will clear the discussion list
    // cache so that results are reloaded.
    if (app.previous.matches(VirtualAuthorIndexPage)) {
      this.listState.clear();
    }

    this.listState.refreshParams(app.search.params(), m.route.param('page'));

    app.history.push('index', app.translator.trans('core.forum.header.back_to_index_tooltip'));

    this.bodyClass = 'App--index';
    this.scrollTopOnCreate = false;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.setTitle();

    // Work out the difference between the height of this hero and that of the
    // previous hero. Maintain the same scroll position relative to the bottom
    // of the hero so that the sidebar doesn't jump around.
    const oldHeroHeight = app.cache.heroHeight;
    const heroHeight = (app.cache.heroHeight = this.$('.Hero').outerHeight() || 0);
    const scrollTop = app.cache.scrollTop;

    $('#app').css('min-height', $(window).height()! + heroHeight);

    // Let browser handle scrolling on page reload.
    if (app.previous.type === null) return;

    // Only retain scroll if we're coming from a discussion page.
    // Otherwise, we've just changed the filter, so we should go to the top of the page.
    if (this.lastDiscussion) {
      $(window).scrollTop(scrollTop - oldHeroHeight + heroHeight);
    } else {
      $(window).scrollTop(0);
    }

    // If we've just returned from a discussion page, then the constructor will
    // have set the `lastDiscussion` property. If this is the case, we want to
    // scroll down to that discussion so that it's in view.
    if (this.lastDiscussion) {
      const $discussion = this.$(`li[data-id="${this.lastDiscussion.id()}"] .DiscussionListItem`);

      if ($discussion.length) {
        const indexTop = $('#header').outerHeight()!;
        const indexBottom = $(window).height();
        const discussionTop = $discussion.offset()!.top;
        const discussionBottom = discussionTop + $discussion.outerHeight()!;

        if (discussionTop < scrollTop + indexTop || discussionBottom > scrollTop + indexBottom) {
          $(window).scrollTop(discussionTop - indexTop);
        }
      }
    }
  }

  onbeforeremove(vnode) {
    super.onbeforeremove(vnode);

    // Save the scroll position so we can restore it when we return to the
    // discussion list.
    app.cache.scrollTop = $(window).scrollTop();
  }

  onremove(vnode) {
    super.onremove(vnode);

    $('#app').css('min-height', '');
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

  heroMetaItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();
    const va = this.virtualAuthor;

    items.add(
      'discussionCount',
      <span>
        {icon('fas fa-comments')}{' '}
        {app.translator.trans('davwheat-virtual-authors.forum.virtual_author_page.discussion_count', { count: va.discussionCount() })}
      </span>,
      100
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
            <DiscussionList state={this.listState} />
          </div>
        </div>
      </div>
    );
  }

  /**
   * Build an item list for the navigation in the sidebar of the index page. By
   * default this is just the 'All Discussions' link.
   */
  navItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();
    const params = app.search.stickyParams();

    items.add(
      'allDiscussions',
      <LinkButton href={app.route('index', params)} icon={'far fa-comments'}>
        {app.translator.trans('core.forum.index.all_discussions_link')}
      </LinkButton>,
      100
    );

    return items;
  }

  /**
   * Build an item list for the part of the toolbar which is concerned with how
   * the results are displayed. By default this is just a select box to change
   * the way discussions are sorted.
   */
  viewItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();
    const sortMap = this.listState.sortMap();

    const sortOptions = Object.keys(sortMap).reduce((acc, sortId) => {
      acc[sortId] = app.translator.trans(`core.forum.index_sort.${sortId}_button`);
      return acc;
    }, {} as Record<string, Mithril.Children>);

    items.add(
      'sort',
      <Dropdown
        buttonClassName="Button"
        label={sortOptions[app.search.params().sort] || Object.keys(sortMap).map((key) => sortOptions[key])[0]}
        accessibleToggleLabel={app.translator.trans('core.forum.index_sort.toggle_dropdown_accessible_label')}
      >
        {Object.keys(sortOptions).map((value) => {
          const label = sortOptions[value];
          const active = (app.search.params().sort || Object.keys(sortMap)[0]) === value;

          return (
            <Button icon={active ? 'fas fa-check' : true} onclick={app.search.changeSort.bind(app.search, value)} active={active}>
              {label}
            </Button>
          );
        })}
      </Dropdown>,
      100
    );

    return items;
  }

  /**
   * Build an item list for the part of the toolbar which is about taking action
   * on the results. By default this is just a "mark all as read" button.
   */
  actionItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'refresh',
      <Button
        title={app.translator.trans('core.forum.index.refresh_tooltip')}
        icon="fas fa-sync"
        className="Button Button--icon"
        onclick={() => {
          this.listState.refresh();
          if (app.session.user) {
            app.store.find('users', app.session.user.id());
            m.redraw();
          }
        }}
      />,
      100
    );

    return items;
  }
}
