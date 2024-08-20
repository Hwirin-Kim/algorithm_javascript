let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [N, goal] = input[0].split(' ').map(Number);
const array = input.slice(1).map(Number);
const sortedArray = array.sort((a,b)=> b - a)
let count = 0;

sortedArray.forEach((currentCoin)=>{
    if(currentCoin<=goal){
    count = count + Math.floor(goal/currentCoin)
    goal = goal%currentCoin
    }
})
console.log(count)