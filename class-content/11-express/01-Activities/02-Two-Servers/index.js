const http = require("http");
const PORT1 = 7000;
const PORT2 = 7500;

const handleRequest = (request, response) => {
  response.end("insperational quote ");
};
const server1 = http.createServer(handleRequest);
server1.listen(PORT1, () => {
  console.log(`Server is listening on PORT ${PORT1}`);
})
const server2 = http.createServer(handleRequest);
server2.listen(PORT2, () => {
  console.log(`Server is listening on PORT ${PORT2}`);
})
