var Catalogo = require('../models/catalogo');
var ObjectId = require('mongoose').Types.ObjectId;
var _ = require('lodash');

exports.guardar = function(req, res, next){
	
	var catalogo = new Catalogo(req.body);
	
	catalogo.save(function (err, catalogo){
		if (err) {
			console.log("err: "+err);
			res.send({success : false, message : err});
		}else{
			console.log("Guardado con exito!");
			res.send({success: true, catalogo : catalogo});
		}
	});
};