let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()
let number = parseInt(input)
let answer = 0
let count = Math.floor(number/5)

for (let i=count; i>=0; i-- ){
    let a = number - i*5
    if(a%3===0){
        answer = i + a/3
        break;
    }
}



console.log(answer?answer:-1)