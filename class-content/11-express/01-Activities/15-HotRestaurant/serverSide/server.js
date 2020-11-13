var express = require("express");
var path = require("path");
const customerCreate = require("customer.js")

const PORT = 8080;
const app = express();

let tables = [
    {
        name: 1,
        reserved: false,
    },
    {
        name: 2,
        reserved: false,
    },
    {
        name: 3,
        reserved: false,
    },
    {
        name: 4,
        reserved: false,
    },
    {
        name: 5,
        reserved: false,
    }
]

app.get("", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});