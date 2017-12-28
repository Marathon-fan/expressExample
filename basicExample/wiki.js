// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();
// Note: Adding routes to the Router object is just like adding routes to the app object (as shown previously).


// Home page route
router.get('/', function(req, res) {
	res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
	res.send('About this wiki');
});

module.exprots = router;
//If you want to export a complete object in one assignment instead of building it one property at a time, 
//assign it to module.exports as shown below (you can also do this to make the root of the exports object a constructor or other function):