var models = require('./models'),

Schema = models.Schema;

var mesaSchema = new Schema({
	color:{type: String,default:'Marron'},
	forma:{type: String,default:'Rectangular'},
	esArmable:{type: String,default:'No'},
	esDesplegable:{type: String,default:'No'}
});

var Catalogo = models.model('Catalogo',mesaSchema,'catalogo');
module.exports = Catalogo;

