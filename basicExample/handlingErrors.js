var express = require('express');
var app = express();

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});


// Note: HTTP404 and other "error" status codes are not treated as errors. 
// If you want to handle these, you can add a middleware function to do so. For more information see the FAQ.

