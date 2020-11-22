const express = require("express");
var exphbs = require("express-handlebars");
const path = require("path");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
];

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./views"))

app.get("/icecream/:name",(req, resp)=>{
    const flavor = req.params.name;
    console.log(flavor);
    for(let i = 0; i < icecreams.length; i++){
        if(flavor === icecreams[i].name){
            console.log(icecreams[i].name)
            resp.render("thecream", icecreams[i]);
        };
    };
});
// const PORT = 8080;
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});