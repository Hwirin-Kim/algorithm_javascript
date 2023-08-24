let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].trim().split(' ')
if (input == '') {
    console.log(0)
}else {
console.log(input.length)}