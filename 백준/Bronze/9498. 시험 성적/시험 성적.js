let fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = Number(input[0])

const test = (a) => {
    if (a>=90) {
    return "A"
}
else if(a>=80) {
    return "B"
}
else if(a>=70) {
    return "C"
}
else if (a>=60) {
    return "D"
}
else { return "F"}
}
console.log(test(a))