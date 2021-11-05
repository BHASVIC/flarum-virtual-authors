import app from 'flarum/admin/app';

import addModel from '../common/addModel';
import SettingsPage from './pages/SettingsPage';

app.initializers.add('bhasvic/manual-blog-authors', () => {
  addModel();

  app.extensionData.for('bhasvic-virtual-authors').registerPage(SettingsPage);
});
