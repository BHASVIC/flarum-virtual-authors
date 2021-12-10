import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import type Discussion from 'flarum/common/models/Discussion';
import type VirtualAuthor from '../../common/VirtualAuthor';
import VirtualAuthorPanelItem from './VirtualAuthorPanelItem';
import icon from 'flarum/common/helpers/icon';

interface IAttrs {
  discussion: Discussion;
}

export default class VirtualAuthorPanel extends Component<IAttrs> {
  view() {
    const discussion = this.attrs.discussion;
    const virtualAuthors: VirtualAuthor[] | false = discussion.virtualAuthors();

    return (
      <aside class="VirtualAuthorPanel">
        <h2 class="VirtualAuthorPanel-Title">
          {icon('fas fa-user-edit')} {app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_panel.heading')}
        </h2>

        {!virtualAuthors && (
          <p class="VirtualAuthorPanel-error">
            {icon('fas fa-exclamation-circle')} {app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_panel.error')}
          </p>
        )}

        <ul class="VirtualAuthorPanel-List">
          {virtualAuthors && virtualAuthors.map((virtualAuthor: VirtualAuthor) => <VirtualAuthorPanelItem virtualAuthor={virtualAuthor} />)}
        </ul>
      </aside>
    );
  }
}
