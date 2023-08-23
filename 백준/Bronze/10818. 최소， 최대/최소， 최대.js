let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let length = Number(input[0])
let arr = input[1].split(' ').map(num=>Number(num))

console.log(Math.min.apply(null, arr), Math.max.apply(null,arr));