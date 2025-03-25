// Importing the required modules
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1'; // localhost
const port = 3000; // You can use any available port

// Creating the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body
  res.end('Hello World!\n');
});

// Start the server and listen on the defined port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
