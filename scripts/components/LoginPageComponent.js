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
				<span ref="loginnameerror" className="loginnameerror"></span>
				<input type="text" placeholder="password" ref="loginpassword"/>
				<span ref="loginpassworderror" className="loginpassworderror"></span>
				<button type="submit">LOGIN NOW</button>
			</form>
		);},
	loginFunction: function(e){
		e.preventDefault;
		console.log('button pushed');
		$('.loginnameerror').html('');
		$('.loginpassworderror').html('');
		if(React.findDOMNode(this.refs.loginname).value===""){$('.loginnameerror').html('you must enter a login name');}
  		if(React.findDOMNode(this.refs.loginname).value===""){$('.loginnameerror').html('you must enter a login name');}
   		else{
        	var Loggie= new usermodel();
        	console.log(Loggie);

        	Loggie.login({
        		username: React.findDOMNode(this.refs.loginname).value,
        		password: React.findDOMNode(this.refs.loginpassword).value
        		},	
				{
					success: function(userModel) {
						app.navigate('home', {trigger: true});
					},

					error: function(userModel, response) {
					console.log(userModel,response);

					if(response.responseJSON.code === 101){
						$('.loginnameerror').html('incorrect name or password');
					}
				}
			});
        }

	}
});

module.exports = LoginPage;

