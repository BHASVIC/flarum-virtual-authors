import app from 'flarum/admin/app';

import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import VirtualAuthor from 'src/common/VirtualAuthor';

export default class SettingsPage extends ExtensionPage {
  virtualAuthors: VirtualAuthor[] | null = null;
  loading: boolean = true;
  errored: boolean = false;

  content() {
    if (this.loading) {
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
            <p>{app.translator.trans('bhasvic-virtual-authors.admin.settings.errored')}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="ExtensionPage-settings">
        <div className="container"></div>
      </div>
    );
  }

  async loadAllVirtualAuthors() {
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
}
