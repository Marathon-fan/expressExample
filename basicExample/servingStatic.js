var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(express.static('media'));

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});

//navigate to http://localhost:3000/bash.txt