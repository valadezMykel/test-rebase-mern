const inq = require("inquirer");
const mysql = require("mysql");

const port = 3306;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'steph45$U',
    database : 'top_songsDB'
});

connection.connect(()=>{
    start();
});

function start(){
    inq.prompt([
        {
            type: "list",
            choices: [
                "Songs by artist",
                "Artist that have more than 1 top song",
                "Specific range of top songs",
                "Song by title",
                "Exit"
            ],
            name: "searchType",
            message: "How would you like to search?"
        }
    ]).then((answer)=>{
        switch(answer){
            case "Songs by artist":
                byArtist();
                break;
            case "Artist that have more than 1 top song":
                doubleArtist();
                break;
            case "Specific range of top songs":
                rangeSpec();
                break;
            case "Song by title":
                titleSearch();
                break;
            case "Exit":
                connection.end();
                break;
        }
    })
}

function byArtist(){
    inq.prompt([{

    }])
}