const http = require('http');
const port = 8001;

const server = http.createServer((req, res) => {

    console.log(req.url);
    if (req.url === `/`) {
        // TO see the list of HTTP response codes google for "HTTP Codes"
        res.end(`<h1>Strange person, you're talking to a server</h1>`);
        // res.writeHead(200, { 'Content-type': 'text/html' });
    }
    else if (req.url === `/about`) {
        res.end(`<h1>About page</h1>`);

    } else if (req.url === `/contacts`) {
        res.end(`<h1>Contacts page<h1><p>Call me later</p>`);
    } else if (res.writeHead(404)) {
        res.end(`<h1>ERROR 404</h1>`);
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`I am a cute server on the port ${port}`);
});

// Write in address line in browser:
// 127.0.0.1:8000
// or
// localhost:8000