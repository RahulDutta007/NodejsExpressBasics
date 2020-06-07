var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('This is the homepage');
});

app.get('/profile/:id', function(req, res){
	console.log(req.params.id);
	res.send('You requested to see a profile with id: ' + req.params.id);
});

app.get('/contact/:name', function(req, res){
	console.log(req.params.name);
	res.send('You requested to see a profile with name: ' + req.params.name);
});


var port = 3000;
app.listen(port, () =>{
	console.log("Listening on port " + port);
});