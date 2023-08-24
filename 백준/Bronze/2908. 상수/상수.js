let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let stringA = input[0]
let stringB = input[1]
let reverseA =''
let reverseB =''
for (let num of stringA) {
    reverseA = num + reverseA
}
for (let num of stringB) {
    reverseB = num + reverseB
}
if (Number(reverseA)>Number(reverseB)) {
    console.log(Number(reverseA))
}else {
    console.log(Number(reverseB))
}