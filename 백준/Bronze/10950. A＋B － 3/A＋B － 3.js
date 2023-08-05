let fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n')
let length = Number(input[0])
for (let i =1; i<=length; i++) {
    let [x,y] = input[i].split(" ").map(item=>Number(item))
    console.log(x+y)
}