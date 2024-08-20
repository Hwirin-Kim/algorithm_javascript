let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = Number(input[0]);
let array = input[1].split(" ").map(Number);
let sortedArray = array.sort((a,b)=>a - b);
let total = 0;
for (let i = 0; i<cnt; i++){
    total = total + (cnt-i) * sortedArray[i]
   
}

console.log(total)