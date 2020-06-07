var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});
	
});



app.post('/contact', function(req, res){
	console.log(req.body.who)
	res.render('contact-success', {data: req.body});
	console.log("bitches");
	
});



var port = 3000;
app.listen(port, () =>{
	console.log("Listening on port " + port);
});