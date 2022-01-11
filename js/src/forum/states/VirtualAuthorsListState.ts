import app from 'flarum/forum/app';
import PaginatedListState, { PaginatedListParams, PaginatedListRequestParams } from 'flarum/common/states/PaginatedListState';
import type { ApiResponsePlural } from 'flarum/common/Store';
import type VirtualAuthor from '../../common/VirtualAuthor';

export interface VirtualAuthorsListParams extends PaginatedListParams {
  sort?: string;
}

export default class VirtualAuthorsListState<P extends VirtualAuthorsListParams = VirtualAuthorsListParams> extends PaginatedListState<
  VirtualAuthor,
  P
> {
  constructor(params: P, page: number = 1) {
    super(params, page, 20);
  }

  get type(): string {
    return 'virtualAuthors';
  }

  requestParams(): PaginatedListRequestParams {
    const params = {
      filter: this.params.filter || {},
      sort: this.sortMap()[this.params.sort ?? ''],
    };

    if (this.params.q) {
      params.filter.q = this.params.q;
    }

    return params;
  }

  protected loadPage(page: number = 1): Promise<ApiResponsePlural<VirtualAuthor>> {
    const preloadedVirtualAuthors = app.preloadedApiDocument<VirtualAuthor[]>();

    if (preloadedVirtualAuthors) {
      this.initialLoading = false;

      return Promise.resolve(preloadedVirtualAuthors);
    }

    return super.loadPage(page);
  }

  /**
   * Get a map of sort keys (which appear in the URL, and are used for
   * translation) to the API sort value that they represent.
   */
  sortMap() {
    const map: any = {};

    // if (this.params.q) {
    //   map.relevance = '';
    // }
    // map.latest = '-lastPostedAt';
    // map.top = '-commentCount';
    // map.newest = '-createdAt';
    // map.oldest = 'createdAt';

    return map;
  }

  /**
   * In the last request, has the user searched for a discussion?
   */
  isSearchResults(): boolean {
    return !!this.params.q;
  }

  removeVirtualAuthor(discussion: VirtualAuthor): void {
    for (const page of this.pages) {
      const index = page.items.indexOf(discussion);

      if (index !== -1) {
        page.items.splice(index, 1);
        break;
      }
    }

    m.redraw();
  }

  /**
   * Add a discussion to the top of the list.
   */
  addVirtualAuthor(discussion: VirtualAuthor): void {
    this.removeVirtualAuthor(discussion);

    m.redraw();
  }
}
