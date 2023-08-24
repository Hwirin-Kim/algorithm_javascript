let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

for (let i=1; i<=n; i++) {
    let arr = input[i].split(' ').map(item=>Number(item))
    let cases = arr[0]
    let sum = 0
    for (let j=1; j<=cases; j++){
        sum += arr[j]
    }
    let average = sum / cases
    let overAverage = []
    for (let k = 1; k <=cases; k++) {
        if (arr[k]>average){
            overAverage.push(arr[k])
        }
    }
    let overAverageCnt = overAverage.length;
    let ratio = overAverageCnt / cases * 100
    console.log(`${ratio.toFixed(3)}%`)
}