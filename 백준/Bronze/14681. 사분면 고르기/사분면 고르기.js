let fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')

let x = Number(input[0]);
let y = Number(input[1]);

if (x > 0 && y > 0) {
  return console.log(1);
} else if (x > 0 && y < 0) {
  return console.log(4);
} else if (x < 0 && y < 0) {
  return console.log(3);
} else return console.log(2);