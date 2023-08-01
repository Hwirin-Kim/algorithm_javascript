let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString()
let arr = input.split(" ")

let a = parseInt(arr[0])
let b = parseInt(arr[1])

console.log(a*b)