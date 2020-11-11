// Dependencies
const http = require("http");
const url = require("url");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // parse the GET query parameters from the URL
  const queryObject = url.parse(req.url,true).query;

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
    res.end();
  });

}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
