var express = require('express');
var app = express();


// There is a special routing method, app.all(), which will be called in response to any HTTP method. This is used for loading middleware functions 
// at a particular path for all request methods. The following example (from the Express documentation) shows a handler that will be executed for 
// requests to /secret irrespective of the HTTP verb used (provided it is supported by the http module).

app.all('/secret', function(req, res, next) {
	console.log('Accessing the secret section ...');
	next(); // pass control to the next handler
});


// The Express application object also provides methods to define route handlers for all the other HTTP verbs, 
// which are mostly used in exactly the same way: post(), put(), delete(), options(), trace(), copy(), lock(), 
// mkcol(), move(), purge(), propfind(), proppatch(), unlock(), 
// report(), mkactivity(), checkout(), merge(), m-search(), notify(), 
// subscribe(), unsubscribe(), patch(), search(), and connect().

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});
