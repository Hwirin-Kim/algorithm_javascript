let fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split("").map(item=>Number(item));

for (let i = 1; i<=9; i++) {
    console.log(`${input[0]} * ${i} = ${input[0]*i}`)
}