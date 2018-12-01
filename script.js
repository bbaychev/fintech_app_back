var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({

    // mysql://b69ec27c5c0b5b:ef83cc53@eu-cdbr-west-02.cleardb.net/heroku_7ba11b197eba2eb?reconnect=true

    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b69ec27c5c0b5b',
    password: 'ef83cc53',
    database: 'heroku_7ba11b197eba2eb'

});

connection.connect(function (error) {
    if (!!error) {
        console.log('Error');
        console.log(error.code);
    } else {
        console.log('Connected');
    }
}
);

app.route('/e').get( (req, res) => {
        connection.query("SELECT * FROM test", function(error, rows, fields){
            if(!!error){
                console.log('Error - query');
            } else {
                console.log("Success");
                console.log(rows);
            }
        });
});



app.listen(3006);
