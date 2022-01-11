import Button from 'flarum/common/components/Button';
import Placeholder from 'flarum/common/components/Placeholder';
import Page, { IPageAttrs } from 'flarum/common/components/Page';
import app from 'flarum/forum/app';

import VirtualAuthorsListState from '../states/VirtualAuthorsListState';
import VirtualAuthorsListItem from '../components/VirtualAuthorsListItem';
import classList from 'flarum/common/utils/classList';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import Stream from 'flarum/common/utils/Stream';
import { debounce } from 'flarum/common/utils/throttleDebounce';
import withAttr from 'flarum/common/utils/withAttr';

import type Mithril from 'mithril';

interface IAttrs extends IPageAttrs {}

export default class VirtualAuthorsList extends Page<IAttrs> {
  protected bodyClass: string = 'App--virtualAuthorsList';

  protected paginationState!: VirtualAuthorsListState;

  protected nameFilter = new Stream<string>();

  protected debounceKeys: Record<string, number> = {};

  oninit(vnode: Mithril.Vnode<IAttrs, this>): void {
    super.oninit(vnode);

    this.paginationState = new VirtualAuthorsListState({});
  }

  oncreate(vnode: Mithril.VnodeDOM<IAttrs, this>): void {
    super.oncreate(vnode);

    this.paginationState.refresh();
  }

  filterView(): Mithril.Children {
    return (
      <div class="VirtualAuthorsList-filter">
        <label>
          <input
            class="FormControl"
            type="text"
            oninput={withAttr('value', (val: string) => {
              if (this.debounceKeys.name) clearTimeout(this.debounceKeys.name);

              this.debounceKeys.name = setTimeout(() => {
                this.nameFilter(val);
                m.redraw();
              }, 500);
            })}
            placeholder={app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.filter_name_placeholder')}
          />
        </label>
      </div>
    );
  }

  listView(): Mithril.Children {
    const state = this.paginationState;

    let loading;

    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = <LoadingIndicator />;
    } else if (state.hasNext()) {
      loading = (
        <Button class="Button" onclick={state.loadNext.bind(state)}>
          {app.translator.trans('core.forum.discussion_list.load_more_button')}
        </Button>
      );
    }

    if (state.isEmpty()) {
      return <Placeholder text={app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.empty_text')} />;
    }

    if (this.paginationState.getParams()?.filter?.displayName !== this.nameFilter()) {
      if (this.nameFilter().length < 3 && this.paginationState.getParams()?.filter?.displayName !== undefined) {
        this.paginationState.refreshParams({ filter: {} }, 1);
      } else {
        this.paginationState.refreshParams({ filter: { displayName: this.nameFilter() } }, 1);
      }
    }

    return (
      <>
        <ul className="VirtualAuthorsList-virtualAuthors">
          {state.getPages().map((pg) => {
            return pg.items.map((va) => (
              <li key={va.id()} data-id={va.id()}>
                <VirtualAuthorsListItem data={va} />
              </li>
            ));
          })}
        </ul>
        <div className="DiscussionList-loadMore">{loading}</div>
      </>
    );
  }

  heroView(): Mithril.Children {
    return (
      <header class="Hero VirtualAuthorHero">
        <div class="container">
          <div class="containerNarrow">
            <h2 class="Hero-title">{app.translator.trans('davwheat-virtual-authors.forum.virtual_authors_list.title')}</h2>
          </div>
        </div>
      </header>
    );
  }

  viewItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add('hero', this.heroView(), 100);

    items.add('filter', this.filterView(), 80);

    items.add('list', this.listView(), 60);

    return items;
  }

  view(vnode: Mithril.Vnode<IAttrs, this>) {
    return (
      <div className={classList('VirtualAuthorsList', { 'VirtualAuthorsList--searchResults': this.paginationState.isSearchResults() })}>
        {this.viewItems().toArray()}
      </div>
    );
  }
}
