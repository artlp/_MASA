const http = require ('http');
const port = 8000;
const server = http.createServer((req,res) => {
    // console.log(req);
    res.writeHead(200,{'Content-type':'text/html'}); //* to see the list of http response codes google it!
    res.end("<h1>SERVER IS RUNNING</h1>");
    console.log(req.url);
})


server.listen(port, '127.0.0.1', () => {
    console.log(`server online @ port ${port}`);
});