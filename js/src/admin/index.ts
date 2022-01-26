import app from 'flarum/admin/app';

import addModel from '../common/addModel';
import addDiscussionBadge from '../common/addDiscussionBadge';
import SettingsPage from './pages/SettingsPage';

app.initializers.add('davwheat/virtual-authors', () => {
  addModel();
  addDiscussionBadge();

  app.extensionData
    .for('davwheat-virtual-authors')
    .registerSetting({
      setting: 'davwheat-virtual-authors.link-to-virtual-authors-from-discussion',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.link_to_va_from_discussion'),
    })
    .registerSetting({
      setting: 'davwheat-virtual-authors.authors-in-sidebar',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.authors_in_sidebar'),
      help: app.translator.trans('davwheat-virtual-authors.admin.settings.authors_in_sidebar_help'),
    })
    .registerSetting({
      setting: 'davwheat-virtual-authors.discussion-badge',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.discussion_badge'),
    })
    .registerSetting({
      setting: 'davwheat-virtual-authors.virtual-authors-page-disabled',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.virtual_authors_page_disabled'),
      help: app.translator.trans('davwheat-virtual-authors.admin.settings.virtual_authors_page_disabled_help'),
    })
    .registerPage(SettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-ghost',
        label: app.translator.trans('davwheat-virtual-authors.admin.permissions.set_virtual_authors'),
        permission: 'discussion.setVirtualAuthors',
        tagScoped: true,
      },
      'moderate',
      94
    )
    .registerPermission(
      {
        icon: 'far fa-address-card',
        label: app.translator.trans('davwheat-virtual-authors.admin.permissions.view_virtual_authors_page'),
        permission: 'viewVirtualAuthorsPage',
      },
      'view'
    );
});
