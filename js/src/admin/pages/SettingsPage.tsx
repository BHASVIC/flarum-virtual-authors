import app from 'flarum/admin/app';

import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import withAttr from 'flarum/common/utils/withAttr';
import VirtualAuthor from '../../common/VirtualAuthor';
import EditVirtualAuthorModal from '../../common/components/EditVirtualAuthorModal';
import VirtualAuthorItem from '../components/VirtualAuthorItem';
import extractText from 'flarum/common/utils/extractText';

export default class SettingsPage extends ExtensionPage {
  /**
   * Array of virtual authors to display.
   */
  virtualAuthors: VirtualAuthor[] | null = null;
  /**
   * Whether the list of authors is currently loading.
   */
  loading: boolean = true;
  /**
   * Whether the list of authors has encountered an error.
   */
  errored: boolean = false;

  /**
   * Chosen sort order.
   */
  sort: 'id' | 'displayName' = 'id';
  /**
   * Filtering by display name.
   */
  search: string = '';
  /**
   * Pagination state for the list.
   */
  pageState = {
    pageNumber: 1,
    isNextPage: false,
    isPrevPage: false,
  };

  /**
   * Timeout key used to wait momentarily after finishing
   * typing before making an API request.
   */
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
      return (
        <div className="ExtensionPage-settings">
          <div className="container">
            {settings && (
              <div className="Form VirtualAuthorSettings">
                {settings.map(this.buildSettingComponent.bind(this))}

                <div className="Form-group">
                  {this.submitButton(vnode)}
                  <p className="helpText">{app.translator.trans('davwheat-virtual-authors.admin.settings.auto_save_message')}</p>
                </div>
              </div>
            )}

            <hr />

            <input
              type="text"
              className="FormControl VirtualAuthorSearch"
              placeholder={extractText(app.translator.trans('davwheat-virtual-authors.admin.settings.search_placeholder'))}
              oninput={withAttr('value', (val: string) => {
                this.search = val;

                // Sort by display name if we're filtering by display name.
                if (this.search) this.sort = 'displayName';
                else this.sort = 'id';

                // Debounce typing - wait for 400ms after stopping before searching
                if (this.updateSearchTimeout) clearTimeout(this.updateSearchTimeout);
                this.updateSearchTimeout = setTimeout(() => this.loadAllVirtualAuthors(), 400);
              })}
              value={this.search}
            />

            <LoadingIndicator />
          </div>
        </div>
      );
    }

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          {settings && (
            <div className="Form VirtualAuthorSettings">
              {settings.map(this.buildSettingComponent.bind(this))}

              <div className="Form-group">
                {this.submitButton(vnode)}
                <p className="helpText">{app.translator.trans('davwheat-virtual-authors.admin.settings.auto_save_message')}</p>
              </div>
            </div>
          )}

          <hr />

          <input
            type="text"
            className="FormControl VirtualAuthorSearch"
            placeholder={extractText(app.translator.trans('davwheat-virtual-authors.admin.settings.search_placeholder'))}
            oninput={withAttr('value', (val: string) => {
              this.search = val;

              // Reset to page 1
              this.pageState.pageNumber = 1;

              // Sort by display name if we're filtering by display name.
              if (this.updateSearchTimeout) clearTimeout(this.updateSearchTimeout);
              this.updateSearchTimeout = setTimeout(() => this.loadAllVirtualAuthors(), 400);
            })}
            value={this.search}
          />

          <div className="VirtualAuthors">
            {this.virtualAuthors.map((virtualAuthor) => (
              // Map array of data to VirtualAuthorItem component instances
              <VirtualAuthorItem key={virtualAuthor.id()} virtualAuthor={virtualAuthor} invalidateData={() => this.loadAllVirtualAuthors()} />
            ))}
          </div>

          <div class="VirtualAuthors-pagination">
            {this.pageState.isPrevPage && (
              <Button
                class="Button prevPage"
                onclick={() => {
                  // Reduce page number and reload
                  this.pageState.pageNumber--;
                  this.loadAllVirtualAuthors();
                }}
              >
                {app.translator.trans('davwheat-virtual-authors.admin.settings.prev')}
              </Button>
            )}
            {this.pageState.isNextPage && (
              <Button
                class="Button nextPage"
                onclick={() => {
                  // Increase page number and reload
                  this.pageState.pageNumber++;
                  this.loadAllVirtualAuthors();
                }}
              >
                {app.translator.trans('davwheat-virtual-authors.admin.settings.next')}
              </Button>
            )}
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

  oncreate(vnode) {
    super.oncreate(vnode);
    this.loadAllVirtualAuthors();
  }

  updateSearch(search: string) {
    this.search = search;

    this.loadAllVirtualAuthors();
  }

  async loadAllVirtualAuthors() {
    this.loading = true;
    m.redraw();

    const limit = 30;

    try {
      this.virtualAuthors = await app.store.find('virtualAuthors', {
        sort: this.sort,
        page: { limit, offset: (this.pageState.pageNumber - 1) * limit },
        filter: { displayName: this.search },
      });

      const links = this.virtualAuthors!.payload?.links;
      this.pageState.isNextPage = !!links?.next;
      this.pageState.isPrevPage = !!links?.prev;

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
