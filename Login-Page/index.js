var con = require('./connection')

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/login.html');
});

app.post('/', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        con.query(sql, [name, email, password], function(error, result){
            if(error) throw error;
            res.send('User Register succssesfully' + result.insertId);
        });

    });
});

app.listen(7000);

