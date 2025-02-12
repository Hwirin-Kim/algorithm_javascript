const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let index = 0;
const totalCase = parseInt(input[0])
index++


for (let i = 0; i < totalCase; i++) { 
    let count = Number(input[index]);
    index++;

    let array = [];

    for (let j = 0; j < count; j++) {
        let [a, b] = input[index].split(' ').map(Number);
        index++;
        array.push({ a, b });
    }
    const sortedArray = array.sort((c, d) => c.a - d.a);

    let value = 1; 
    let minInterviewRank = sortedArray[0].b;
    for (let k = 1; k < sortedArray.length; k++) {
        const currentValue = sortedArray[k].b
        if (currentValue < minInterviewRank) {
            value++;
            minInterviewRank = sortedArray[k].b;
        }
    }

    console.log(value);
}
