let fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString()
let num = Number(input)
let a= 0
for (let i = 1; i <= num; i++) {
  a += i;
}
console.log(a);