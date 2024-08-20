let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [N, goal] = input[0].split(' ').map(Number);
const array = input.slice(1).map(Number);
let count = 0;


for(let i = N-1; i>=0; i--){
    while(array[i]<=goal){
   goal -= array[i];
   count++;
   }
    
    if (goal === 0) {
        break;
    }
}

console.log(count)