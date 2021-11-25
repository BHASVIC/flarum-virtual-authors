import Model from 'flarum/common/Model';

export default class VirtualAuthor extends Model {
  displayName = Model.attribute('displayName');
  description = Model.attribute('description');
  credit = Model.attribute('credit');

  creditedDiscussions = Model.hasMany('discussions');
}
