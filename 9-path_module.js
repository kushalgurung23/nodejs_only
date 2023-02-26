const path = require('path');
console.log(path.sep); 

const testFilePath = path.join('/content', 'sub_content', 'test.txt');
console.log(testFilePath);

const base = path.basename(testFilePath);
console.log(base);

console.log(__dirname);

const absolute = path.resolve(__dirname, 'content', 'sub_content', 'test1.txt');
console.log(absolute);