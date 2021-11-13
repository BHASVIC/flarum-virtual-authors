import app from 'flarum/admin/app';

import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import VirtualAuthor from 'src/common/VirtualAuthor';
import EditVirtualAuthorModal from '../components/EditVirtualAuthorModal';
import VirtualAuthorItem from '../components/VirtualAuthorItem';

export default class SettingsPage extends ExtensionPage {
  virtualAuthors: VirtualAuthor[] | null = null;
  loading: boolean = true;
  errored: boolean = false;

  content() {
    if (this.loading || !this.virtualAuthors) {
      this.loadAllVirtualAuthors();

      return (
        <div className="ExtensionPage-settings">
          <div className="container">
            <LoadingIndicator />
          </div>
        </div>
      );
    }

    if (this.errored) {
      return (
        <div className="ExtensionPage-settings">
          <div className="container">
            <p>{app.translator.trans('davwheat-virtual-authors.admin.settings.errored')}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <div className="VirtualAuthors">
            {this.virtualAuthors.map((virtualAuthor) => (
              <VirtualAuthorItem virtualAuthor={virtualAuthor} invalidateData={() => this.loadAllVirtualAuthors()} />
            ))}
          </div>
          <div className="VirtualAuthor-new">
            <Button class="Button Button--primary" onclick={() => this.createVirtualAuthor()}>
              {app.translator.trans('davwheat-virtual-authors.admin.settings.create_new')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  async loadAllVirtualAuthors() {
    this.loading = true;

    try {
      this.virtualAuthors = await app.store.find('virtualAuthors');
      this.loading = false;
      m.redraw();
    } catch {
      this.errored = true;
      this.loading = false;
      m.redraw();
    }
  }

  createVirtualAuthor() {
    app.modal.show(EditVirtualAuthorModal, {
      type: 'new',
      virtualAuthor: app.store.createRecord('virtualAuthors'),
      onhide: () => this.loadAllVirtualAuthors(),
    });
  }
}
