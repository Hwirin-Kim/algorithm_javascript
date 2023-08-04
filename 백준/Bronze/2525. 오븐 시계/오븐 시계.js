let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let inputTime = input[0];
let inputOffset = Number(input[1]);
let inputHour = Number(input[0].split(" ")[0]);
let inputMinute = Number(input[0].split(" ")[1]);

const plusTime = (h, m, o) => {
  let min = (m + o) % 60;
  let hour = h +  Math.floor((m + o) / 60);

  if (hour > 23) {
    hour = hour%24;
  }
  return `${hour} ${min}`;
};

console.log(plusTime(inputHour, inputMinute, inputOffset));