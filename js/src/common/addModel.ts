import app from 'flarum/common/app';
import VirtualAuthor from './VirtualAuthor';
import Discussion from 'flarum/common/models/Discussion';
import Model from 'flarum/common/Model';

export default function addModel() {
  app.store.models.virtualAuthors = VirtualAuthor;

  Discussion.prototype.virtualAuthors = Model.hasMany('virtualAuthors');
}
