var React = require('react');
var Backbone = require('backparse')({
	appId: '0BwbKUbAB2oIDk7oObUeUA4G9fwuPKFGhPNXa2O4',
	apiKey: 'fflZ2pTBK9WVDlia6hKnlyHayvjczT42MOPrBWSc',
	apiVersion: 1
});
var usermodel = require('../models/UserModel');
var $ = require('jquery');
var app = require('../main');
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");
var LoginPage = React.createClass({

	render: function(){
		return (
			<form onSubmit={this.loginFunction}>
				<h1>Login Yo</h1>
				<input  type="text" placeholder="name" ref="loginname"/>
				<input type="text" placeholder="password" ref="loginpassword"/>
				
				<button type="submit">LOGIN NOW</button>
			</form>
		);},
	loginFunction: function(e){
		e.preventDefault;
     
        var Loggie= new usermodel();

        Loggie.login({
        	username: React.findDOMNode(this.refs.loginname).value,
        	password: React.findDOMNode(this.refs.loginpassword).value
        	},	
			{
				success: function(userModel) {
					//app.navigate('home', {trigger: true});
				},

				error: function(userModel, response) {
				console.log(userModel,response);
			}
		});


	}
});

module.exports = LoginPage;
