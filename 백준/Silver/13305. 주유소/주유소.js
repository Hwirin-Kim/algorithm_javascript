const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().split('\n')
const distanceArray = input[1].split(' ').map(Number)
const priceArray = input[2].split(' ').map(Number)

let totalPrice = 0
let minPrice = priceArray[0]
for (let i=0; i<distanceArray.length; i++){
    if(minPrice>priceArray[i]){
        minPrice = priceArray[i]
    }
    const price = distanceArray[i] * minPrice
    totalPrice += price
}

console.log(totalPrice)
