const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// promisify turns function into a function that returns promise
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, result) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}

// getText('./content/first_test.txt').then((result) => console.log(result)).catch((err) => console.log(err
//     ));

const start = async () => {
    try {
        // const first = await getText('./content/first_test.txt');
        // const second = await getText('./content/second_test.txt');
        // const first = await readFilePromise('./content/first_test.txt', 'utf-8');
        // const second = await readFilePromise('./content/second_test.txt', 'utf-8');
        const first = await readFile('./content/first_test.txt', 'utf-8');
        const second = await readFile('./content/second_test.txt', 'utf-8');
        await writeFile('./content/fourth_test.txt', 'HEY CHELSEA ');
        console.log(first, second);
    }
    catch(error) {
        console.log(error);
    }
}

start();