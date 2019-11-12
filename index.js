var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.json);
app.use(bodyparser.urlencoded);

var fetch = require('node-fetch');

app.get('/', function (req, res) {
    fetch('https://api.github.com/users/github')
        .then(res => res.json())
        .then(json => console.log(json)); 
        console.log("pase por aca");  
});

app.get('/clientes', function (req, res) {
    res.send('mantenimiento de clientes');
});

app.get('/clientes/:id', function (req, res) {
    res.send('mantenimiento de clientes');
    var id = req.params.id;
    console.log(id);
});

app.post('/clientes/:id', function (req, res) {
    var id = req.params.id;
    res.json({requestBody: req.body});
    console.log("Alta del usuario " + req.body) 
}); 

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
