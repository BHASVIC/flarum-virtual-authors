import app from 'flarum/admin/app';
import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import ItemList from 'flarum/common/utils/ItemList';
import VirtualAuthor from '../../common/VirtualAuthor';

interface IEditModalAttrs {
  virtualAuthor: VirtualAuthor;
  type: 'edit' | 'new';
}

export default class EditVirtualAuthorModal extends Modal {
  attrs!: IEditModalAttrs;

  modelState!: {
    displayName: string;
    description: string;
  };

  oninit() {
    const virtualAuthor = this.attrs.virtualAuthor;

    this.modelState.displayName = virtualAuthor.displayName();
    this.modelState.description = virtualAuthor.description();
  }

  title() {
    return app.translator.trans(`davwheat-virtual-authors.admin.edit_modal.title_${this.attrs.type}`);
  }

  content() {
    return <fieldset>{this.fields().toArray()}</fieldset>;
  }

  fields() {
    const items = new ItemList();

    items.add(
      'displayName',
      <div class="Form-group">
        <label>{app.translator.trans('davwheat-virtual-authors.admin.edit_modal.fields.name')}</label>
        <input
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
        <label>{app.translator.trans('davwheat-virtual-authors.admin.edit_modal.fields.description')}</label>
        <textarea
          value={this.modelState.description}
          oninput={(e: InputEvent) => (this.modelState.description = (e.currentTarget as HTMLInputElement).value)}
        />
      </div>,
      90
    );

    items.add(
      'submit',
      <Button class="Button Button--primary" type="submit">
        {app.translator.trans(`davwheat-virtual-authors.admin.edit_modal.fields.submit_${this.attrs.type}`)}
      </Button>,
      -10
    );

    return items;
  }

  onsubmit() {
    this.attrs.virtualAuthor.save(this.modelState);
  }
}
