const http = require('http');
const fs = require('fs');

// Creating a Readable Stream
const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
// Creating a Writable Stream 
const writeStream = fs.createWriteStream(__dirname + '/write-me3.txt');

// Using the ReadStream, calling the function named data and chunk is the information that we are printing
readStream.on('data', (chunk) => {
    console.log('New Data Received');
    // Printing the content thanks to the buffer
    console.log(chunk);
    // Using the WriteStream to write the data on the file
    writeStream.write(chunk);
});

// Using Pipe to read and write data using both buffers
// This will read the data of the readStream and put it on the writeStream
readStream.pipe(writeStream);


const server = http.createServer((request, response) => {
    /* FOR TEXT FILE 
    response.writeHead(200, { 'Content-Type': 'text/plain' });
     Creating a Readable Stream
    const readStream2 = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
     Using the pipe, but sending the data to the response
    readStream2.pipe(response);
    */

    /* FOR HTML TYPE 
    response.writeHead(200, { 'Content-Type': 'text/html' });
     Creating a Readable Stream
    const readStream2 = fs.createReadStream(__dirname + '/index.html', 'utf-8');
     Using the pipe, but sending the data to the response
    readStream2.pipe(response);
    */

    /* FOR JSON FILE 
    response.writeHead(200, { 'Content-Type': 'application/json' });

    Printing the URL 
    console.log(request.url);

    const person ={
        name: 'Felipe',
        email: 'felipe@gmail.com',
        job: 'Developer'
    }

     Sending the JSON, stringify converts an object into the JSON Format
    response.end(JSON.stringify(person)); */

    response.writeHead(200, { 'Content-Type': 'text/html' });
    let readStream3;

    // IMPLEMENTING A ROUTING 
    if (request.url === '/home' || request.url === '/') {
        // Creating a Readable Stream
        readStream3 = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        // Using the pipe, but sending the data to the response
    } else {
        if (request.url === '/about') {
            // Creating a Readable Stream
            readStream3 = fs.createReadStream(__dirname + '/about.html', 'utf-8');
            // Using the pipe, but sending the data to the response
        } else {
            // Creating a Readable Stream
            readStream3 = fs.createReadStream(__dirname + '/404.html', 'utf-8');
            // Using the pipe, but sending the data to the response
        }
    }
    readStream3.pipe(response);

});

// Starting the server with the port 3000
server.listen(3000, '127.0.0.1');
