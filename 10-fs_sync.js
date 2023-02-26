const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first_test.txt', 'utf-8');
const second = readFileSync('./content/second_test.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', 'Hello this is appended text', {flag: 'a'});