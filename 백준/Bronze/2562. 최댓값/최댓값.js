let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>Number(item))

let maxValue = input.reduce((max,cur)=>Math.max(max,cur),0)
let number = input.indexOf(maxValue) + 1

console.log(maxValue, number)