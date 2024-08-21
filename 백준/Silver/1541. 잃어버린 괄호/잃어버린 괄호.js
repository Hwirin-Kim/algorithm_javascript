let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]

let splitInput = input.split('-');

let transformed = splitInput.map(item=>{
    if(item==='-'){
        return item
    }
    const plusArray = item.split("+").filter(plus=>plus!=="+").map(Number)
    const total = plusArray.reduce((acc,cur)=>{return acc+cur},0)
    return total
}).filter(minus=>minus!=='-');
const goal = transformed.reduce((arr,cur)=>{return arr-cur},(2*transformed[0]))
console.log(goal)