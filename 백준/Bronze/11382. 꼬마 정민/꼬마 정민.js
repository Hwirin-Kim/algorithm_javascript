let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(str=>Number(str))

console.log(input[0]+input[1]+input[2])