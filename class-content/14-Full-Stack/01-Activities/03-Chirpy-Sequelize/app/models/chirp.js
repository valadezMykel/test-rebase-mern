// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelizeConnection (lowercase) references our connection to the DB.
var sequelizeConnection = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Chirp = sequelizeConnection.define("chirp", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
