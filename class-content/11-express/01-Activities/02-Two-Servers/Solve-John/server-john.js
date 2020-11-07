const http = require("http");

const PORT = 7000;

const handleRequest = (request, response) => {
  response.end(`It works!! Path hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})

const PORT2 = 7500;

const handleRequest2 = (request, response) => {
  response.end(`It works!! Path hit: ${request.url}`);
};

const server2 = http.createServer(handleRequest2);

server2.listen(PORT2, () => {
  console.log(`Server is listening on PORT ${PORT2}`);
})