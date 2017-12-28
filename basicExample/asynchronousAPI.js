var express = require('express');
var app = express();
// The first two lines require() (import) the express module and create an Express application. 
// This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, 
// rendering HTML views, registering a template engine, and modifying application settings that control how the 
// application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

app.get('/', function(req, res) {
	setTimeout(function() {
		console.log('first');
	}, 3000);
	console.log('Second');

});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});

// Using non-blocking asynchronous APIs is even more important on Node than in the browser, because Node is a single threaded event-driven execution environment. 
// "single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes). 