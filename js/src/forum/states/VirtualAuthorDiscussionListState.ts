import DiscussionListState from 'flarum/forum/states/DiscussionListState';

import type Discussion from 'flarum/common/models/Discussion';

export default class VirtualAuthorDiscussionListState extends DiscussionListState {
  private preloadedApiDocument: null | Discussion[];
  private virtualAuthorId: string | number;

  constructor(page: number, virtualAuthorId: string | number, preloadedApiDocument: null | Discussion[]) {
    super({}, page);

    this.virtualAuthorId = virtualAuthorId;
    this.preloadedApiDocument = preloadedApiDocument;

    this.initialLoading = true;
  }

  loadPage(page: number = 1): any {
    if (this.preloadedApiDocument) {
      return Promise.resolve(this.preloadedApiDocument);
    }

    // We need to skip the super.loadPage() call
    return (super.__proto__.loadPage as Function).call(this, page);
  }

  protected parseResults(pg: number, results: Discussion[]): void {
    // As soon as any request is made, we can clear the preloaded API document
    this.preloadedApiDocument = null;

    super.parseResults(pg, results);
  }

  requestParams() {
    const p = super.requestParams();

    p.filter['virtual-author'] = this.virtualAuthorId;

    return p;
  }
}
