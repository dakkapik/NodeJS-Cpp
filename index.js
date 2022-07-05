require('nan')
// console.log("finished \"nan\"");
const addon = require('./build/Release/addon.node');
console.log(addon.getPos());

// const cPlusPlusHelloTime = "c++ hello"
// console.time(cPlusPlusHelloTime);
addon.hello();
// console.timeEnd(cPlusPlusHelloTime);

// const jsLoopTime = "js loop";
// console.time(jsLoopTime);
// let count = 0;
// for (let i = 0; i < 1000000; i++) {
//     count = i;
// }
// console.log("hello\n");
// console.timeEnd(jsLoopTime);

// console.log("\"hello\" function called");