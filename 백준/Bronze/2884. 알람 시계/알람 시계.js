let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(" ")

let h = Number(input[0])
let m = Number(input[1])

const c = 45

const minus45minute = (h,m,c) =>{
    let newM
    let newH
    if (m<c) {
        newM = 60+m-c
        newH = h-1
        if(newH<0) {
            newH=23
        }
    }else {
        newM= m-c
        newH=h
    }
    return `${newH} ${newM}`
}
console.log(minus45minute(h,m,c))
