let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')



let newArr = [];
for (let i = 1; i <= input[0]; i++) {
  newArr.push(input[i]);
}
newArr.sort((a, b) => a - b);

let ans = ""
for (let i = 0; i < newArr.length; i++) {
  ans += newArr[i] + "\n"
}
console.log(ans)