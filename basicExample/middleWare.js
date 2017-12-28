
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});

// Note: The middleware can perform any operation, execute any code, make changes to the request and response object, and it can also end the request-response cycle. 
// If it does not then end the cycle it must call next() to pass control to the next middleware function (or the request will be left hanging).