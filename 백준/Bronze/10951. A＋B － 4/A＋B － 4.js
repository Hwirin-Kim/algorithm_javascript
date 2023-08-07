let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let answer = ''
for (let i = 0; i<input.length-1; i++) {
    let a = Number(input[i].split(" ")[0])
    let b = Number(input[i].split(" ")[1])
    
    if (i<input.length-1) {
        answer += a+b+' \n'
    }else {
        answer += a+b
    }
}console.log(answer)