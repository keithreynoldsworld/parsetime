var React = require('react');
var Backbone = require('backparse')({
	appId: '0BwbKUbAB2oIDk7oObUeUA4G9fwuPKFGhPNXa2O4',
	apiKey: 'fflZ2pTBK9WVDlia6hKnlyHayvjczT42MOPrBWSc',
	apiVersion: 1
});
var $ = require('jquery');
var usermodel = require('../models/UserModel');
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");
var app = require('../main')

var RegisterPage = React.createClass({

	render: function(){
		return (
			<form onSubmit={this.registerFunction}>
				<h1>Register Yo</h1>

				<input  type="text" placeholder="name" ref="registername"/>
				<span ref="nameerror" className="nameerror"></span>
				<input type="text" placeholder="password" ref="registerpassword"/>
				<span ref="passworderror" className="passworderror"></span>
				<input type="text" placeholder="confirm password" ref="registerconfirmpassword"/>
				<span ref="confirmerror" className="confirmerror"></span>
				<input type="text" placeholder="email" ref="registeremail"/>
				<span ref="emailerror" className="emailerror"></span>
				<button type="submit">REGISTER NOW</button>
			</form>
		);
	},
	registerFunction: function(e){
		e.preventDefault();
		var N = React.findDOMNode(this.refs.registername).value;
		var P = React.findDOMNode(this.refs.registerpassword).value;
		var C = React.findDOMNode(this.refs.registerconfirmpassword).value;
		var E = React.findDOMNode(this.refs.registeremail).value;
		$('.nameerror').html('');
		$('.passworderror').html('');	
		$('.confirmerror').html('');
		$('.emailerror').html('');
		if(N===""){$('.nameerror').html('you must enter a name');}
		if(P===""){$('.passworderror').html('you must enter a password');}	
		if(C===""){$('.confirmerror').html('you must enter a password confirmation');}
		if(E===""){$('.emailerror').html('you must enter an email');}
		if(C!==P){$('.confirmerror').html('you must enter a correct password confirmation');}
		if(!validator.contains(E,'@')){$('.nameerror').html('you must enter a valid email');}

		else{

        	var Reggie= new usermodel({
        		username: React.findDOMNode(this.refs.registername).value,
        		password: React.findDOMNode(this.refs.registerpassword).value,
        		email: React.findDOMNode(this.refs.registeremail).value
        	});

       	 	Reggie.save(null,{
				success: function(userModel) {
					app.navigate('home', {trigger: true});
				},

				error: function(userModel, response) {
					console.log(response);
					if(response.responseJSON.code === 202){
						$('.nameerror').html('username is taken');
					}
					if(response.responseJSON.code === 203){
						$('.emailerror').html('email is already being used');
					}
				}
			});
       	 }

	}
});

module.exports = RegisterPage;