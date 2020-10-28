
var fs = require("fs");
const inquierer = require("inquirer");

inquierer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages"
    },
    {
      type: "input",
      message: "What is your preferred method of communciation?",
      name: "prefrance"
    }
  ])
//   Then write the user response to a file.
  .then(function(response) {
    console.log(response)
    fs.appendFile("log.txt", "Hello"+`${response.username}`+"/r/n"
    +"The Languages you know are "+`${response.languages}`+"/r/n"
    +"Your prefered Language is "+`${response.prefrance}`,
    function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

  });

  
  


