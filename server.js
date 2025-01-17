const http = require('http');

const PORT = process.env.PORT || 3000;
const RESPONSE_MESSAGE = process.env.RESPONSE_MESSAGE || 'Default message';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(RESPONSE_MESSAGE);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
