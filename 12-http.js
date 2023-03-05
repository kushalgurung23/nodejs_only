const http = require('http');

// request object represents what is coming in
// response object represents what we are sending out
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Welcome to about page')
    }
    else {
        res.end(`<h1>Oops!</h1>
    <p>Page not found</p>
    <a href='/'>Back home</a>
    `);
    }
});

// OR

server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(3000);