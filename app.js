var express = require('express');
var app = express();
var server = require('http').createServer(app);


//separando la configuracion
var config = {
	rootPath:__dirname
};
require('./server/config/express')(app,config);
require('./server/config/routes')(app);
/*Create server*/
server.listen(3000,function(){
	console.log('Servidor corriendo en ele puerto 3000');
});