const http = require('http');

// request object represents what is coming in
// response object represents what we are sending out
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('CHELSEA 5-0 LEEDS');
    }
    else if (req.url === '/about') {
        // BLOCKING CODE
        for(let i=0; i < 1000; i++) {
            for (j=0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About page');
    }
   
});

server.listen(3000, ()=> {
    console.log("started listening on port 3000");
})