let fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let arr = input[0].split(" ")

let a = Number(arr[0])
let b = Number(arr[1])

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)