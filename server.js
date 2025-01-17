const http = require('http');

// Access environment variables for message and port
const responseMessage = process.env.RESPONSE_MESSAGE || 'Hello World';
const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(responseMessage + '\n');
}).listen(port, '0.0.0.0');

console.log(`Server running at http://0.0.0.0:${port}/`);

