let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>Number(item))

let set = new Set()
for (let i = 0; i < input.length; i++) {
  set.add(input[i]%42);
}

console.log(set.size)