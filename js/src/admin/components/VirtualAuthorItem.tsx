import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import VirtualAuthor from '../../common/VirtualAuthor';
import EditVirtualAuthorModal from './EditVirtualAuthorModal';

interface IVirtualAuthorItemProps {
  virtualAuthor: VirtualAuthor;
}

export default class VirtualAuthorItem extends Component<IVirtualAuthorItemProps> {
  view() {
    return (
      <div className="VirtualAuthorItem">
        <div className="VirtualAuthorItem-name">{this.attrs.virtualAuthor.displayName()}</div>
        <Button className="Button VirtualAuthorItem-editButton" onclick={() => this.edit()}>
          {app.translator.trans('davwheat-virtual-authors.admin.virtual_author_item.edit')}
        </Button>
      </div>
    );
  }

  edit() {
    app.modal.show(EditVirtualAuthorModal, {
      type: 'edit',
      virtualAuthor: this.attrs.virtualAuthor,
    });
  }
}
