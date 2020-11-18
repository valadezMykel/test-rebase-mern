const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlistDB"
});

connection.connect(function(err){
  if(err) {
    console.log(err)
  } else {
    console.log("connected as id " + connection.threadId);
    afterConnection();
  }
})

function afterConnection() {
  printAllSongs();
  printByGenre("Classic Rock");
  printByGenre("Dance");
  printByGenreArtist("Dance", "The Who");
}

function printAllSongs() {
  connection.query("SELECT * FROM songs", function(err, result){
    if(err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function printByGenre(genre) {
  connection.query(`SELECT * FROM songs WHERE genre = '${genre}'`, function(err, result){
    if(err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function printByGenreArtist(genre, artist) {
  connection.query(`SELECT * FROM songs WHERE genre = '${genre}' AND artist = '${artist}'`, function(err, result){
    if(err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}