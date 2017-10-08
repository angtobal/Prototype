var mesa     = require('../controllers/mesa');
var catalogo = require('../controllers/catalogo');

module.exports = function(app){
	
	app.get('/lista',mesa.lista);
	
	app.post('/savecatalogo',catalogo.guardar);
	
	/*app.get('*', function(req,res){
		res.render('index');
	});*/
}