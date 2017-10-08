var clone = require('clone');
var models = require('./models'),

Schema = models.Schema;

var mesaSchema = new Schema({
	color:{type: String,default:'Marron'},
	forma:{type: String,default:'Rectangular'},
	esArmable:{type: String,default:'No'},
	esDesplegable:{type: String,default:'No'}
});

mesaSchema.methods = {
	clone : function(){
		
		//compia simple
		
		//alternativo
		//return  clone(this);
		
		return {
					id:this.id,
					color:this.color,
					forma:this.forma,
					esArmable:this.esArmable,
					esDesplegable:this.esDesplegable,
					clone:this.clone};
		}
}

var Mesa = models.model('Mesa',mesaSchema,'mesa');
module.exports = Mesa;

