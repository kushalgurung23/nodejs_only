const {writeFileSync, createReadStream} = require('fs');

// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'});
// }

// DEFAULT size of buffer is 64kb
// last buffer = remainder
// highWaterMark - control size
// 

const stream = createReadStream('./content/big.txt',
{highWaterMark: 90000
}
);

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => console.log(err));