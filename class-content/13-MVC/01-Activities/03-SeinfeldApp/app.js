const express = require("express");
const mysql = require("mysql");

app = express();

var connection = mysql.createConnection({
    user     : 'root',
    password : 'secret'
});
   


connection.connect((e)=>{if(err) throw err;});

// returns all obj ordered by lames
app.get("/lames", (req, resp)=>{
    connection.query("")

})
