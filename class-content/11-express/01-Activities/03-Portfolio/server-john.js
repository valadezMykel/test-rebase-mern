const http = require("http");

const PORT = 8080;

const displayRoot = (res) => {
  var myHTML = "<html>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/json" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

const displayPortfolio = (res) => {
  var myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

const display404 = (url, res) => {
  var myHTML = "<html>" +
  "<body><h1>404 Not Found </h1>" +
  "<p>The page you were looking for: " + url + " can not be found</p>" +
  "</body></html>";

// Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
res.writeHead(404, { "Content-Type": "text/html" });

// End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
res.end(myHTML);
}

const handleRequest = (req, res) => {
  switch(req.url) {
    case "/":
      return displayRoot(res);
      
    case "/portfolio":
      return displayPortfolio(res);
      
    default:
      return display404(req.url, res);
  }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})