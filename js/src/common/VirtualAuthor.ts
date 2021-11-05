import Model from 'flarum/common/Model';

export default class VirtualAuthor extends Model {
  displayName = Model.attribute('displayName');
  description = Model.attribute('description');

  creditedDiscussions = Model.hasMany('discussions');
}
