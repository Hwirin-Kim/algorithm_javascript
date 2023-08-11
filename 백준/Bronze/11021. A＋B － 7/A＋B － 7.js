let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let repeat = Number(input[0])

let ans = ''
for (let i=1; i<=repeat; i++) {
    let plus = input[i].split(" ").map(num=>Number(num))
    ans += `Case #${i}: ${plus[0]+plus[1]}` + '\n'
}
console.log(ans)