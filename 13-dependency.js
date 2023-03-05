// npm (node package manager). Two types:

// local dependency - use it only in this particular project
// npm i <packagename> like expressjs, bootstrap

// glocal dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project and packages)
// ways of creating:
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

// DEV DEPENDENCY: npm i nodemon -D

// UNINSTALL DEPENDENCY. WE CAN DO FROM TWO METHODS:
// 1. npm uninstall bootstrap
// 2. delete package-lock.json, remove dependency(ex-bootstrap) from package.json, and write npm install in command

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello chelsea champion");
