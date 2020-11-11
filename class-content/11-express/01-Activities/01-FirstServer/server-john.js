const http = require("http");

const PORT = 8080;

const handleRequest = (request, response) => {
  response.end(`It works!! Path hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})