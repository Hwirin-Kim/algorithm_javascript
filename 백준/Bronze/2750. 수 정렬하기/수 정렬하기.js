let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item)=>Number(item))



let newArr = [];
for (let i = 1; i <= input[0]; i++) {
  newArr.push(input[i]);
}
newArr.sort((a, b) => a - b);

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}
