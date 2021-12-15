import app from 'flarum/admin/app';

import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import { debounce } from 'flarum/common/utils/throttleDebounce';

import withAttr from 'flarum/common/utils/withAttr';
import VirtualAuthor from '../../common/VirtualAuthor';
import EditVirtualAuthorModal from '../../common/components/EditVirtualAuthorModal';
import VirtualAuthorItem from '../components/VirtualAuthorItem';
import extractText from 'flarum/common/utils/extractText';

export default class SettingsPage extends ExtensionPage {
  virtualAuthors: VirtualAuthor[] | null = null;
  loading: boolean = true;
  errored: boolean = false;

  sort: 'id' | 'displayName' = 'id';
  search: string = '';
  page: number = 1;

  updateSearchTimeout: number | null = null;

  content(vnode) {
    const settings = app.extensionData.getSettings(this.extension.id);

    if (this.errored) {
      return (
        <div className="ExtensionPage-settings">
          <div className="container">
            <p>{app.translator.trans('davwheat-virtual-authors.admin.settings.errored')}</p>
          </div>
        </div>
      );
    }

    if (this.loading || !this.virtualAuthors) {
      this.loadAllVirtualAuthors();

      return (
        <div className="ExtensionPage-settings">
          <div className="container">
            <input
              type="text"
              className="FormControl VirtualAuthorSearch"
              placeholder={extractText(app.translator.trans('davwheat-virtual-authors.admin.settings.search_placeholder'))}
              oninput={withAttr('value', (val: string) => {
                this.search = val;

                if (this.updateSearchTimeout) clearTimeout(this.updateSearchTimeout);
                this.updateSearchTimeout = setTimeout(() => this.loadAllVirtualAuthors(), 400);
              })}
              value={this.search}
            />

            <LoadingIndicator />

            <hr />

            {settings && (
              <div className="Form VirtualAuthorSettings">
                {settings.map(this.buildSettingComponent.bind(this))}

                <div className="Form-group">
                  {this.submitButton(vnode)}
                  <p className="helpText">{app.translator.trans('davwheat-virtual-authors.admin.settings.auto_save_message')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <input
            type="text"
            className="FormControl VirtualAuthorSearch"
            placeholder={extractText(app.translator.trans('davwheat-virtual-authors.admin.settings.search_placeholder'))}
            oninput={withAttr('value', (val: string) => {
              this.search = val;

              if (this.updateSearchTimeout) clearTimeout(this.updateSearchTimeout);
              this.updateSearchTimeout = setTimeout(() => this.loadAllVirtualAuthors(), 400);
            })}
            value={this.search}
          />

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

          <hr />

          {settings && (
            <div className="Form VirtualAuthorSettings">
              {settings.map(this.buildSettingComponent.bind(this))}

              <div className="Form-group">
                {this.submitButton(vnode)}
                <p className="helpText">{app.translator.trans('davwheat-virtual-authors.admin.settings.auto_save_message')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  updateSearch(search: string) {
    this.search = search;

    this.loadAllVirtualAuthors();
  }

  async loadAllVirtualAuthors() {
    this.loading = true;
    m.redraw();

    try {
      this.virtualAuthors = await app.store.find('virtualAuthors', {
        sort: this.sort,
        page: this.page,
        filter: { displayName: this.search },
      });
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
