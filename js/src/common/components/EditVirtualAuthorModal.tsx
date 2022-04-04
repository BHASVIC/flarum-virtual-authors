import app from 'flarum/admin/app';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import ItemList from 'flarum/common/utils/ItemList';

import type VirtualAuthor from '../../common/VirtualAuthor';
import type Mithril from 'mithril';

interface IEditModalAttrs extends IInternalModalAttrs {
  virtualAuthor: VirtualAuthor;
  type: 'edit' | 'new';
  onhide: () => void;
}

export default class EditVirtualAuthorModal extends Modal<IEditModalAttrs> {
  modelState!: {
    displayName: string;
    description: string;
  };

  oninit(vnode: Mithril.Vnode<IEditModalAttrs, this>) {
    super.oninit(vnode);

    const virtualAuthor = this.attrs.virtualAuthor;

    this.modelState = {
      displayName: virtualAuthor.displayName(),
      description: virtualAuthor.description(),
    };
  }

  title() {
    return app.translator.trans(`davwheat-virtual-authors.lib.edit_modal.title_${this.attrs.type}`);
  }

  className(): string {
    return 'EditVirtualAuthorModal';
  }

  content() {
    return <div class="Modal-body">{this.fields().toArray()}</div>;
  }

  fields() {
    const items = new ItemList();

    items.add(
      'displayName',
      <div class="Form-group">
        <label>{app.translator.trans('davwheat-virtual-authors.lib.edit_modal.fields.name')}</label>
        <input
          disabled={this.loading}
          class="FormControl"
          type="text"
          value={this.modelState.displayName}
          oninput={(e: InputEvent) => (this.modelState.displayName = (e.currentTarget as HTMLInputElement).value)}
        />
      </div>,
      100
    );

    items.add(
      'description',
      <div class="Form-group">
        <label>{app.translator.trans('davwheat-virtual-authors.lib.edit_modal.fields.description')}</label>
        <textarea
          disabled={this.loading}
          class="FormControl"
          value={this.modelState.description}
          oninput={(e: InputEvent) => (this.modelState.description = (e.currentTarget as HTMLInputElement).value)}
        />
      </div>,
      90
    );

    items.add(
      'submit',
      <Button class="Button Button--primary" type="submit" disabled={this.loading}>
        {app.translator.trans(`davwheat-virtual-authors.lib.edit_modal.submit_${this.attrs.type}`)}
        {this.loading && <LoadingIndicator display="inline" size="small" />}
      </Button>,
      -10
    );

    return items;
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();
    this.save();
  }

  async save() {
    this.loading = true;
    m.redraw();

    try {
      await this.attrs.virtualAuthor.save(this.modelState);
      this.attrs.onhide();
      this.hide();
    } catch (e: any) {
      this.onerror(e);
      console.error(e);
    }
  }
}
