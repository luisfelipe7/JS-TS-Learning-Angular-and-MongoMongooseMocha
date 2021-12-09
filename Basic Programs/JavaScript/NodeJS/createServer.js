// Creating a Simple Server

// Using the http module 
const http = require('http');

// Creating the server
const server = http.createServer((request,response) => {
    //Printing the request URL
    console.log(request.url);
    // Using two object, request and response
    // Creating the response
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Ending the response
    response.end('Hello World!');
});

// Setting the port
// Local server with the port 30000
console.log('Local Server in Port 3000');
server.listen(3000, "127.0.0.1");