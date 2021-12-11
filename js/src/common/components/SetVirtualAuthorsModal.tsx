import app from 'flarum/common/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Modal from 'flarum/common/components/Modal';
import Tooltip from 'flarum/common/components/Tooltip';
import withAttr from 'flarum/common/utils/withAttr';
import { truncate } from 'flarum/common/utils/string';

import type Discussion from 'flarum/common/models/Discussion';
import type VirtualAuthor from '../../common/VirtualAuthor';
import type Mithril from 'mithril';
import Button from 'flarum/common/components/Button';
import Fuse from 'fuse.js';

interface ISetModalAttrs {
  discussion: Discussion & { virtualAuthors(): VirtualAuthor[] };
}

interface ISelectedVirtualAuthorState {
  id: string;
  credit: string;
}

export default class SetVirtualAuthorsModal extends Modal {
  attrs!: ISetModalAttrs;

  allVirtualAuthors: VirtualAuthor[] | null = null;
  virtualAuthors: VirtualAuthor[] | null = null;

  selectedVirtualAuthors: ISelectedVirtualAuthorState[] = [];

  filterString: string = '';

  get filteredVirtualAuthors(): VirtualAuthor[] {
    if (!this.filterString) return this.allVirtualAuthors;
    if (!this.allVirtualAuthors) return [];

    const fuse = new Fuse(this.allVirtualAuthors, {
      keys: [{ name: 'data.attributes.displayName', weight: 2 }, 'data.attributes.description', 'data.id'],
    });

    return fuse.search(this.filterString).map((results) => results.item);
  }

  oninit(vnode) {
    super.oninit(vnode);

    this.selectedVirtualAuthors = this.attrs.discussion.virtualAuthors().map((va) => ({ id: va.id(), credit: va.credit() }));

    this.loadData();
  }

  className(): string {
    return 'SetVirtualAuthorsModal';
  }

  title() {
    return app.translator.trans(`davwheat-virtual-authors.forum.set_modal.title`);
  }

  content() {
    if (!this.allVirtualAuthors) {
      return (
        <div class="Modal-body">
          <LoadingIndicator />
        </div>
      );
    }

    return (
      <div class="Modal-body">
        <h3>{app.translator.trans('davwheat-virtual-authors.forum.set_modal.existing')}</h3>

        <div className="Form-group SelectedVirtualAuthorList">
          {this.selectedVirtualAuthors.length === 0 && (
            <div class="Placeholder">
              <p>{app.translator.trans('davwheat-virtual-authors.forum.set_modal.none_existing')}</p>
            </div>
          )}
          {this.selectedVirtualAuthors.map((va) => this.selectedVirtualAuthorItem(va))}
        </div>

        <h3>{app.translator.trans('davwheat-virtual-authors.forum.set_modal.add_new')}</h3>

        <div class="Form-group">
          <label for="virtualAuthorFilterTb" class="sr-only">
            {app.translator.trans('davwheat-virtual-authors.forum.set_modal.search')}
          </label>

          <input
            class="FormControl"
            id="virtualAuthorFilterTb"
            type="text"
            oninput={withAttr('value', (val: string) => {
              this.filterString = val;
            })}
            placeholder={app.translator.trans('davwheat-virtual-authors.forum.set_modal.search')}
          />
        </div>

        <div className="Form-group VirtualAuthorList">{this.filteredVirtualAuthors.map((va) => this.virtualAuthorListItem(va))}</div>

        <Button class="Button Button--primary" type="submit">
          {app.translator.trans('davwheat-virtual-authors.forum.set_modal.save')}
        </Button>
      </div>
    );
  }

  isVirtualAuthorSelected(va: VirtualAuthor): boolean {
    return this.selectedVirtualAuthors.some((selectedVa) => selectedVa.id === va.id());
  }

  addVirtualAuthor(va: VirtualAuthor) {
    this.selectedVirtualAuthors.push({ id: va.id(), credit: '' });
    m.redraw();
  }

  removeVirtualAuthor(va: VirtualAuthor) {
    this.selectedVirtualAuthors = this.selectedVirtualAuthors.filter((v) => v.id !== va.id());
    m.redraw();
  }

  virtualAuthorListItem(va: VirtualAuthor) {
    return (
      <div className="VirtualAuthorListItem" key={va.id()}>
        <div className="VirtualAuthorListItem-displayName">{va.displayName()}</div>
        <div className="VirtualAuthorListItem-description">
          {truncate(va.description(), 100) || app.translator.trans('davwheat-virtual-authors.forum.set_modal.no_description')}
        </div>

        {this.isVirtualAuthorSelected(va) ? (
          <Tooltip text={app.translator.trans('davwheat-virtual-authors.forum.set_modal.virtual_author_exists')}>
            <Button disabled class="Button" icon="fas fa-plus" onclick={() => this.addVirtualAuthor(va)}>
              {app.translator.trans('davwheat-virtual-authors.forum.set_modal.added_button')}
            </Button>
          </Tooltip>
        ) : (
          <Button class="Button" icon="fas fa-plus" onclick={() => this.addVirtualAuthor(va)}>
            {app.translator.trans('davwheat-virtual-authors.forum.set_modal.add_button')}
          </Button>
        )}
      </div>
    );
  }

  selectedVirtualAuthorItem(va: ISelectedVirtualAuthorState): Mithril.Children {
    const virtualAuthor: VirtualAuthor = app.store.getById('virtualAuthors', va.id);

    return (
      <div className="SelectedVirtualAuthorListItem" key={va.id}>
        <div className="SelectedVirtualAuthorListItem-displayName">{virtualAuthor.displayName()}</div>
        <div className="SelectedVirtualAuthorListItem-credit">
          <input
            class="FormControl"
            type="text"
            value={va.credit}
            oninput={withAttr('value', (val: string) => (va.credit = val))}
            placeholder={app.translator.trans('davwheat-virtual-authors.forum.set_modal.credit_placeholder')}
          />
        </div>
        <Button class="Button" icon="fas fa-minus" onclick={() => this.removeVirtualAuthor(virtualAuthor)}>
          {app.translator.trans('davwheat-virtual-authors.forum.set_modal.delete_button')}
        </Button>
      </div>
    );
  }

  async loadData() {
    this.allVirtualAuthors = null;
    m.redraw();

    try {
      await app.store.find('virtualAuthors');
      this.allVirtualAuthors = app.store.all('virtualAuthors');
      m.redraw();
    } catch (e) {
      this.onerror(e);
      console.error(e);
      m.redraw();
    }
  }

  onsubmit(e: SubmitEvent): void {
    this.save();

    e.preventDefault();
  }

  async save() {
    this.loading = true;
    m.redraw();

    const attributes = {
      virtualAuthorsCredit: this.selectedVirtualAuthors.reduce((acc, va) => {
        acc[va.id] = va.credit;
        return acc;
      }, {} as Record<string, string>),
      relationships: {
        virtualAuthors: this.selectedVirtualAuthors.map((va) => app.store.getById('virtualAuthors', va.id)) || [],
      },
    };

    try {
      const result = await this.attrs.discussion.save(attributes);
      app.store.pushPayload(result);
      this.hide();
    } catch (e) {
      this.onerror(e);
      console.error(e);
    }
  }
}
