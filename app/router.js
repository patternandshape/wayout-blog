import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('author', {path: '/author/:author_id'});
  this.route('category', {path: '/category/:category_id'});
  this.route('about');
  this.route('contact');
});

export default Router;
