var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var express = require('express');
var cookieParser = require('cookie-parser');

module.exports = function(app,config){
	
	app.engine('html',swig.renderFile);
	app.set('view cache',false);

	swig.setDefaults({cache: false, varControls: ['{^','^}']});
	
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
  		extended: true	
	}));

	app.use(express.static(config.rootPath+'/public'));
}