import Model from 'flarum/common/Model';
import type Discussion from 'flarum/common/models/Discussion';

export default class VirtualAuthor extends Model {
  displayName = Model.attribute<string>('displayName');
  description = Model.attribute<string>('description');
  credit = Model.attribute<string | undefined>('credit');
  discussionCount = Model.attribute<number>('discussionCount');

  creditedDiscussions = Model.hasMany<Discussion>('discussions');
}
