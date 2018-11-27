var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fintech_db'
});

connection.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/e', function (req, res){
    connection.query("SELECT * FROM table00", function(error, rows, fields){
        if(!!error){
            console.log('Error - query');
        } else {
            console.log("Success");
            console.log(rows);
        }
    });
});

app.listen(8087);