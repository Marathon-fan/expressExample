var express = require('express');
var app = express();
// The first two lines require() (import) the express module and create an Express application. 
// This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, 
// rendering HTML views, registering a template engine, and modifying application settings that control how the 
// application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

app.get('/', function(req, res) {
	res.send('Hello world!');
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});