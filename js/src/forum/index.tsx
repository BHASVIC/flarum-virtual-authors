import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import type ItemList from 'flarum/common/utils/ItemList';
import type Discussion from 'flarum/common/models/Discussion';

import DiscussionControls from 'flarum/forum/utils/DiscussionControls';

import addModel from '../common/addModel';
import Button from 'flarum/common/components/Button';
import SetVirtualAuthorsModal from '../common/components/SetVirtualAuthorsModal';

app.initializers.add('davwheat/manual-blog-authors', () => {
  addModel();

  extend(DiscussionControls, 'moderationControls', function (items: ItemList, discussion: Discussion) {
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
});
