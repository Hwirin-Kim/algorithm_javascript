let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((item)=>Number(item))

console.log(input.sort((a,b)=>a-b).join(" "))