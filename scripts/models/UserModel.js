var React = require('react');
var Backbone = require('backparse')({
	appId: '0BwbKUbAB2oIDk7oObUeUA4G9fwuPKFGhPNXa2O4',
	apiKey: 'fflZ2pTBK9WVDlia6hKnlyHayvjczT42MOPrBWSc',
	apiVersion: 1
});


var UserModel = Backbone.Model.extend({
	defaults: {

		username: "",
		password: "",
		email: ""

	},
	parseClassName: "_User",
    idAttribute: "objectId",
    isUser: true
});

module.exports = UserModel;