var Mesa = require('../models/mesa');
var Catalogo = require('../models/catalogo');
var ObjectId = require('mongoose').Types.ObjectId;

var _ = require('lodash');//utilitario

exports.lista = function(req, res, next){
	//linea de versiones de mesa
	var prototipoMesa = new Mesa();
	var arr = new Array();
	arr.push(prototipoMesa);
	var mesa = null;
	
	var dd =  Catalogo.find({})
	.exec(function (err, records){
		
		if (err) {
			console.log(err);
			res.render('error', {
                    status: 500
                });
		} else {
		
			_.each(records, function(data){
				mesa = prototipoMesa.clone();
				mesa.color = data.color;
				mesa.forma = data.forma;
				mesa.esArmable = data.esArmable;
				mesa.esDesplegable = data.esDesplegable;
				arr.push(mesa);
			});
			
			res.send({success : true,mesas:arr});
			
		}
		
	});
	
};
