let fs = require('fs')
let input = Number(fs.readFileSync('/dev/stdin').toString())

for (let i = 1; i <= input; i++) {
  let start = "*".repeat(2 * i - 1);
  let empty = " ".repeat(input - i);
  console.log(empty + start);
}
for (let i = input - 1; i >= 1; i--) {
  let start = "*".repeat(2 * i - 1);
  let empty = " ".repeat(input - i);
  console.log(empty + start);
}
