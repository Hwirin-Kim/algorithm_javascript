let fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = Number(input[0])
let bArr = input[1].split("")

let first = a*Number(bArr[2])
let second = a*Number(bArr[1])
let third = a*Number(bArr[0])
let fourth = first + second*10 + third*100

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
