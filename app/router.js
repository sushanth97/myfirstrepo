import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artist');
  this.route('home');
  this.route('about');
  this.route('contact', function() {
    this.route('details',{ path: '/:contact_id' });
  });
  this.route('edit',{path:'contact/:detail_id/edit'});
  this.route('new',{path:'contact/new'});
});

export default Router;
