const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nearestSquare = (number) => {
  let i = 0;
  while ((2 ** i) <= number) i += 1;
  return i - 1;
};

let [length, width, height] = input[0].split(' ').map(Number);
let cubes = Array(20).fill(0);
let n = Number(input[1]);

for (let i = 2; i <= n + 1; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  cubes[a] = b;
}

let size = Math.min(
  nearestSquare(length),
  nearestSquare(width),
  nearestSquare(height)
);

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  let cur = 2 ** i;
  let required = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used;

  if (required > 0) {
    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
  }
}

const totalVolume = length * width * height;
if (used < totalVolume) console.log(-1);
else console.log(res);
