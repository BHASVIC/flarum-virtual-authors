import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import icon from 'flarum/common/helpers/icon';
import extractText from 'flarum/common/utils/extractText';
import VirtualAuthor from '../../common/VirtualAuthor';
import EditVirtualAuthorModal from '../../common/components/EditVirtualAuthorModal';

interface IVirtualAuthorItemProps {
  virtualAuthor: VirtualAuthor;
  invalidateData: () => void;
}

export default class VirtualAuthorItem extends Component<IVirtualAuthorItemProps> {
  view() {
    return (
      <div className="VirtualAuthorItem">
        <div className="VirtualAuthorItem-attribute">
          <span id={`virtualAuthor-${this.attrs.virtualAuthor.id()}--name`}>
            {app.translator.trans('davwheat-virtual-authors.admin.virtual_author_item.name')}
          </span>
          <span aria-describedby={`virtualAuthor-${this.attrs.virtualAuthor.id()}--name`}>{this.attrs.virtualAuthor.displayName()}</span>
        </div>

        <div className="VirtualAuthorItem-attribute">
          <span id={`virtualAuthor-${this.attrs.virtualAuthor.id()}--description`}>
            {app.translator.trans('davwheat-virtual-authors.admin.virtual_author_item.description')}
          </span>
          <span aria-describedby={`virtualAuthor-${this.attrs.virtualAuthor.id()}--description`}>{this.attrs.virtualAuthor.description()}</span>
        </div>

        <Button className="Button VirtualAuthorItem-editButton" onclick={() => this.edit()}>
          {app.translator.trans('davwheat-virtual-authors.admin.virtual_author_item.edit')}
        </Button>

        <Button
          className="Button Button--danger VirtualAuthorItem-deleteButton"
          onclick={async () => {
            if (confirm(extractText(app.translator.trans('davwheat-virtual-authors.admin.virtual_author_item.delete_confirmation')))) {
              await this.attrs.virtualAuthor.delete({});
              this.attrs.invalidateData();
            }
          }}
        >
          {icon('fas fa-trash-alt')}
        </Button>
      </div>
    );
  }

  edit() {
    app.modal.show(EditVirtualAuthorModal, {
      type: 'edit',
      virtualAuthor: this.attrs.virtualAuthor,
      onhide: () => this.attrs.invalidateData(),
    });
  }
}
