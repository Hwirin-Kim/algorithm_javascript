let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()/1
let sum = 0;
let answer = 0;
for (let i = 1; ; i++) {
    if (sum + i > input) break;
    sum += i;
    answer = i;
}
console.log(answer);
