var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbcarpinteria');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'Error de conexion'));
db.once('open',function callback(){
	console.log('Base de datos Carpinteria');
});

module.exports = mongoose;