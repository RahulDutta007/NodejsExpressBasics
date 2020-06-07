var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home');
});

app.get('/contact', function(req, res){
	console.log(req.query)
	res.render('contact', {qs: req.query});
});



var port = 3000;
app.listen(port, () =>{
	console.log("Listening on port " + port);
});