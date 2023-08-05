let fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n')
let totalPrice = Number(input[0])
let cnt = Number(input[1])

let realPrice = 0
for (let i = 2; i <= cnt+1; i++) {
    let [price, cnt] = input[i].split(" ").map((item)=>Number(item))
    realPrice += price*cnt
}
if (realPrice===totalPrice) {
    return console.log("Yes")
} else {
    return console.log("No")
}