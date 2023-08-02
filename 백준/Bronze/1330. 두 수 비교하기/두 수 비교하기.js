let fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split(" ")

let a = Number(input[0])
let b = Number(input[1])

const func = (a,b) => {
    if (a>b) {
        return ">"
    }else if (a<b) {
        return "<"
    }else {
        return "=="
    }
}

console.log(func(a,b))