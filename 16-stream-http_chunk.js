const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');

    // filestream has access to event, so we use open and error events
    fileStream.on('open', () => {
         // pushing from read stream to write stream
        // send data in chunk
        fileStream.pipe(res);
    })

    fileStream.on('error', (err) => {
        res.end(err);
    });

}).listen(3000);

