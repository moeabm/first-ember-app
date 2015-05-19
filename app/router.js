import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
	this.route('service');
	this.route('music');
	this.route('experience');
	this.route('faq');
	this.route('shopping');
	this.route('about');
	this.resource('posts');
	
});
