let fs = require('fs')
let input = Number(fs.readFileSync('/dev/stdin').toString())

if ((input%4===0 && input%100!==0)||input%400===0){
    return console.log(1)
} else return console.log(0)