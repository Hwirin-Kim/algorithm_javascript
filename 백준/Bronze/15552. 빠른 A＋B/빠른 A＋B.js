let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")
let repeat = Number(input[0])

let answer = "";
for (let i = 1; i <= repeat; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  if (i < repeat) {
    answer += a + b + " \n";
  } else answer += a + b;
}
console.log(answer);