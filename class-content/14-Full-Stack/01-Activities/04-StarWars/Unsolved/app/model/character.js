const Sequelize = require("sequelize");
const sqliConn = require("../config/connection");


const characters = sqliConn.define("characters", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    agee: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
})