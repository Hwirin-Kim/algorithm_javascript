const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const distanceArray = input[1].trim().split(' ').map(item => BigInt(item));
const priceArray = input[2].trim().split(' ').map(item => BigInt(item));

let totalPrice = BigInt(0);
let minPrice = priceArray[0];

for (let i = 0; i < distanceArray.length; i++) {
    if (minPrice > priceArray[i]) {
        minPrice = priceArray[i];
    }
    totalPrice += distanceArray[i] * minPrice;
}

console.log(totalPrice.toString());
