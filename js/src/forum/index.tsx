import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import type ItemList from 'flarum/common/utils/ItemList';
import type Discussion from 'flarum/common/models/Discussion';

import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import IndexPage from 'flarum/forum/components/IndexPage';

import addModel from '../common/addModel';
import addDiscussionBadge from '../common/addDiscussionBadge';
import SetVirtualAuthorsModal from '../common/components/SetVirtualAuthorsModal';

import VirtualAuthorPanel from './components/VirtualAuthorPanel';
import VirtualAuthorIndexPage from './components/VirtualAuthorIndexPage';
import VirtualAuthorsList from './pages/VirtualAuthorsList';

import BlogOverviewController from 'flarum/v17development/blog/components/BlogPostController';
import BlogItem from 'flarum/v17development/blog/pages/BlogItem';

import type Mithril from 'mithril';
import VirtualAuthorPanelItem from './components/VirtualAuthorPanelItem';
import VirtualAuthorsListItem from './components/VirtualAuthorsListItem';
import VirtualAuthorsListState from './states/VirtualAuthorsListState';
import VirtualAuthorDiscussionListState from './states/VirtualAuthorDiscussionListState';
import LinkButton from 'flarum/common/components/LinkButton';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';

app.initializers.add('davwheat/virtual-authors', () => {
  addModel();
  addDiscussionBadge();

  app.routes['virtualAuthors.author'] = {
    path: '/author/:slug',
    resolver: {
      onmatch(args) {
        if (!app.forum.attribute('davwheat-virtual-authors.link-to-virtual-authors-from-discussion')) throw new Error();

        return VirtualAuthorIndexPage;
      },
    },
  };

  app.routes['virtualAuthors.list'] = {
    path: '/authors',
    component: VirtualAuthorsList,
  };

  extend(DiscussionControls, 'moderationControls', function (items: ItemList<Mithril.Children>, discussion: Discussion) {
    if (!discussion.canSetVirtualAuthors()) return;

    items.add(
      'setVirtualAuthors',
      <Button
        icon="fas fa-ghost"
        onclick={() => {
          app.modal.show(SetVirtualAuthorsModal, {
            discussion,
          });
        }}
      >
        {app.translator.trans('davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors')}
      </Button>
    );
  });

  extend(DiscussionPage.prototype, 'pageContent', function (this: DiscussionPage, items: ItemList<Mithril.Children>) {
    if (app.forum.attribute('davwheat-virtual-authors.authors-in-sidebar')) return;
    if (!this.discussion?.virtualAuthors().length) return;

    items.add(
      'virtualAuthors',
      <div className="container">
        <VirtualAuthorPanel discussion={this.discussion} />
      </div>,
      50
    );
  });

  extend(DiscussionPage.prototype, 'sidebarItems', function (this: DiscussionPage, items: ItemList<Mithril.Children>) {
    if (!app.forum.attribute('davwheat-virtual-authors.authors-in-sidebar')) return;
    if (!this.discussion?.virtualAuthors().length) return;

    items.add('virtualAuthors', <VirtualAuthorPanel isSidebar discussion={this.discussion} />, 125);
  });

  extend(IndexPage.prototype, 'navItems', (items) => {
    if (app.forum.attribute('canViewVirtualAuthorsPage')) {
      items.add(
        'virtualAuthorList',
        <LinkButton icon="far fa-address-card" href={app.route('virtualAuthors.list')}>
          {app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.sidebar_link')}
        </LinkButton>,
        50
      );
    }
  });

  extend(GlobalSearchState.prototype, 'stickyParams', function (params) {
    if (app.current.get('routeName') === 'virtualAuthors.author') {
      params.slug = m.route.param('slug');
    }
  });

  // Blog-specific customisations
  if ('v17development-blog' in flarum.extensions) {
    extend(BlogOverviewController.prototype, 'manageArticleButtons', function (this: any, items: ItemList<Mithril.Children>) {
      if (!this.attrs.article.canSetVirtualAuthors()) return;

      items.add(
        'setVirtualAuthors',
        <Button
          icon="fas fa-ghost"
          onclick={() => {
            app.modal.show(SetVirtualAuthorsModal, {
              discussion: this.attrs.article,
            });
          }}
        >
          {app.translator.trans('davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors')}
        </Button>
      );
    });

    extend(BlogItem.prototype, 'postItems', function (this: any, items: ItemList<Mithril.Children>) {
      if (this.loading) return;

      if (this.article.virtualAuthors().length) {
        items.add('virtualAuthors', <VirtualAuthorPanel discussion={this.article} />, 70);
      }
    });
  }
});

// Export our JS so that other extension can modify it if desired.

const components = { VirtualAuthorIndexPage, VirtualAuthorPanel, VirtualAuthorPanelItem, VirtualAuthorsListItem };
const pages = { VirtualAuthorsList };
const states = { VirtualAuthorsListState, VirtualAuthorDiscussionListState };

export { components, pages, states };
