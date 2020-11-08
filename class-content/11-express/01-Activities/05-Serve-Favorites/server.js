const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (request, response) =>{
    fs.readFile(__dirname + "/html" +request.url + ".html", function(err, data){
        if(err) throw err;

        response.writeHead(200, { "Content-Type": "text/html"});
        response.end(data);
    });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () =>{console.log("yeah")})