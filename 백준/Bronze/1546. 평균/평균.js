let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


let n = Number(input[0]);
let arr = input[1].split(" ").map((item) => Number(item));
let maxValue = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}
let total = 0;
for (let j = 0; j < n; j++) {
  total += (arr[j] / maxValue) * 100;
}
let newAverage = total / n;
console.log(newAverage);
