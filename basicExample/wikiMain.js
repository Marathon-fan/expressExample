
var express = require('express');
var wiki = require('./wiki.js');

//
var app = express();

app.use('/wiki', wiki)

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');

});