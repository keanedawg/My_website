import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' }); // This is usually automatic if path undeclared, but declared here to support /index below
  this.route('posts', function() {
    this.route('view', {path: '/view/:post_id'});
  });
  this.route('welcome');
  this.route('login');
  this.route('write');
  this.route('projects');
});

export default Router;
