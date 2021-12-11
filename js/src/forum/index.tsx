import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import type ItemList from 'flarum/common/utils/ItemList';
import type Discussion from 'flarum/common/models/Discussion';

import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

import addModel from '../common/addModel';
import SetVirtualAuthorsModal from '../common/components/SetVirtualAuthorsModal';

import VirtualAuthorPanel from './components/VirtualAuthorPanel';
import VirtualAuthorIndexPage from './components/VirtualAuthorIndexPage';

import BlogOverviewController from 'flarum/v17development/blog/components/BlogPostController';
import BlogItem from 'flarum/v17development/blog/pages/BlogItem';

app.initializers.add('davwheat/manual-blog-authors', () => {
  addModel();

  app.routes['virtualAuthors.author'] = {
    path: '/author/:slug',
    resolver: {
      onmatch(args) {
        if (!app.forum.attribute('davwheat-virtual-authors.link-to-virtual-authors-from-discussion')) throw new Error();

        return VirtualAuthorIndexPage;
      },
    },
  };

  extend(DiscussionControls, 'moderationControls', function (items: ItemList, discussion: Discussion) {
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

  extend(DiscussionPage.prototype, 'pageContent', function (this: DiscussionPage, items: ItemList) {
    if (app.forum.attribute('davwheat-virtual-authors.authors-in-sidebar')) return;
    if (!this.discussion.virtualAuthors().length) return;

    items.add(
      'virtualAuthors',
      <div className="container">
        <VirtualAuthorPanel discussion={this.discussion} />
      </div>,
      50
    );
  });

  extend(DiscussionPage.prototype, 'sidebarItems', function (this: DiscussionPage, items: ItemList) {
    if (!app.forum.attribute('davwheat-virtual-authors.authors-in-sidebar')) return;
    if (!this.discussion.virtualAuthors().length) return;

    items.add('virtualAuthors', <VirtualAuthorPanel isSidebar discussion={this.discussion} />, 125);
  });

  // Blog-specific customisations
  if ('v17development-blog' in flarum.extensions) {
    extend(BlogOverviewController.prototype, 'manageArticleButtons', function (this: any, items: ItemList) {
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

    extend(BlogItem.prototype, 'postItems', function (this: any, items: ItemList) {
      if (this.loading) return;

      if (this.article.virtualAuthors().length) {
        items.add('virtualAuthors', <VirtualAuthorPanel discussion={this.article} />, 70);
      }
    });
  }
});
