import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rinks');
  this.route('articles');
  this.route('news');
});

export default Router;
