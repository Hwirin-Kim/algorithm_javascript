let fs = require("fs")
let [x, y, z] = fs.readFileSync('/dev/stdin').toString().split(' ').map(item=>Number(item))

if (x===y&&y===z) {
    return console.log(10000+(x*1000))
}
else if (x!==y&&y!==z&&x!==z) {
    let a = Math.max(x,y,z)
    return console.log(a*100)
}
else {
    let a
    if (x===y) {
        a = x
    }else if (y===z) {
        a = y
    }else {
        a = z
    }
    return console.log(1000+(a*100))
}