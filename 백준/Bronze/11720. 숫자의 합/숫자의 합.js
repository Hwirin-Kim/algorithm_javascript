let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input[1].split('').map(item=>Number(item))

let total = arr.reduce((a,b)=>a+b)
console.log(total)