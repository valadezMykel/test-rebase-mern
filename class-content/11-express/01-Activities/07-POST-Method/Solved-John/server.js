// Dependencies
const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // parse the GET query parameters from the URL
  const queryObject = url.parse(req.url,true).query;
  const path = req.url;
  const method = req.method;

  switch(path) {
    case "/":
      switch(method) {
        case "GET":
          return fs.readFile(__dirname + "/index.html", function(err, data) {
            if (err) throw err;
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });
        case "POST":
          // Saving the request data as a variable
          let requestData = "";

          // When the server receives data...
          req.on("data", function(data) {
            // Add it to requestData.
            requestData += data;
          });

          // When the request has ended...
          req.on("end", function() {

            // Log (server-side) the request method, as well as the data received!
            console.log("You did a", req.method, "with the data:\n", requestData, "\nwith parameters: ", queryObject);

            return fs.readFile(__dirname + "/thankyou.html", function(err, data) {
              if (err) throw err;
              // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
              // an html file.
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(data);
            });
          });
        break;
      }
  }



}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
