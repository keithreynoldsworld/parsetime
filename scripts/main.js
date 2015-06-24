var React = require('react');
var Backbone = require('backparse')({
	appId: '0BwbKUbAB2oIDk7oObUeUA4G9fwuPKFGhPNXa2O4',
	apiKey: 'fflZ2pTBK9WVDlia6hKnlyHayvjczT42MOPrBWSc',
	apiVersion: 1
});
var $ = require('jquery');
Backbone.$ = $

var HomePage = require('./components/HomePageComponent');
var LoginPage = require('./components/LoginPageComponent');
var RegisterPage = require('./components/RegisterPageComponent');
console.log(Backbone.Router);

var App = Backbone.Router.extend({
	routes: {
		'':'home',
		'home': 'home',
		'post/:slug': 'post',
		'login':'login',
		'register': 'register',
		'admin': 'admin'
	},
	home: function () {
		React.render(<HomePage />, document.getElementById('container'));
	},
	login: function(){
		React.render(<LoginPage />, document.getElementById('container'));
	},
	register: function(){
		React.render(<RegisterPage />, document.getElementById('container'));
	}

});

var app = new App();
Backbone.history.start();

module.extend = app;