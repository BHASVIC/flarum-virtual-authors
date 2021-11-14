import app from 'flarum/common/app';
import Modal from 'flarum/common/components/Modal';
import type Discussion from 'flarum/common/models/Discussion';
import type VirtualAuthor from '../../common/VirtualAuthor';

interface ISetModalAttrs {
  discussion: Discussion;
}

export default class SetVirtualAuthorsModal extends Modal {
  attrs!: ISetModalAttrs;

  virtualAuthors: VirtualAuthor[] | null = null;

  oninit(vnode) {
    super.oninit(vnode);

    this.virtualAuthors = this.attrs.discussion.virtualAuthors();
  }

  title() {
    return app.translator.trans(`davwheat-virtual-authors.forum.set_modal.title`);
  }

  content() {
    return <div class="Modal-body"></div>;
  }

  async onsubmit() {
    this.loading = true;
    m.redraw();

    const attributes = {
      relationships: {
        virtualAuthors: this.virtualAuthors || [],
      },
    };

    try {
      const result = await this.attrs.discussion.save(attributes);
      app.store.pushPayload(result);
      this.attrs.onhide();
      this.hide();
    } catch (e) {
      this.onerror(e);
      console.error(e);
    }
  }
}
