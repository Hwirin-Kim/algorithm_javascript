let fs = require('fs')
let input = Number(fs.readFileSync('/dev/stdin').toString())

let repeat = input / 4;
let answer = "long";
for (let i = 1; i < repeat; i++) {
  answer += " long";
}
console.log(answer + " int");