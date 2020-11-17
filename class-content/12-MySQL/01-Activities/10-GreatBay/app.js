const mysql = require("mysql");
const inq = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "steph45$U",
    database: "greatbay_db"
});

connection.connect((err) =>{
    if(err) throw err;
    askTask();
})

function askTask() {
    let currentItemsForBid = [];
    connection.query("SELECT item FROM items", (err, data) =>{
        if(err) throw err;
        console.log(data);
        currentItemsForBid = data.map(item =>{
            item.item
        })

    });



    
    inq.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "task",
            choices: [
                "post item",
                "bid on item"
            ]
        },
        {
            type: "input",
            message: "What item would you like to post",
            name: "item"
        }

    ])
 }


function addItem(){

}