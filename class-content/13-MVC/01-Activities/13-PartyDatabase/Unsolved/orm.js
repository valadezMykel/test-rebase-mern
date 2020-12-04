const connection = require("./connection");

const orm ={
    selectOneThing: function(col, table){
        connection.query("SELECT ?? FROM ??", [col, table], (err, results)=>{
            if(err) throw err;
            console.table(results);
            return results;
        })
    }

};

module.exports = orm;