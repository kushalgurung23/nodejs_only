const {readFile, writeFile} = require('fs');

readFile('./content/first_test.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second_test.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt', `Append text: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
            if(err) {
                console.log(err);
                return err;
            }
            else {
               console.log('written successfully');
            }
        });
    });
    console.log('first text result',result);
});

