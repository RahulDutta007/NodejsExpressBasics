var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('This is the homepage');
});


app.get('/contact', function(req, res){
	res.send('This is the contact page');
});





var port = 3000;
app.listen(port, () =>{
	console.log("Listening on port " + port);
});