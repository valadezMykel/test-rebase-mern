const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    }
]).then((response) =>{
    fs.appendFile('index.html', 
    
    `<html>
        <head>

        </head>
        <body>
            <h1>`${response.name}`</h1>
        </body></html>`
    
    , 'utf8', callback);
})
fs.appendFile('message.txt', 'data to append', 'utf8', callback);

