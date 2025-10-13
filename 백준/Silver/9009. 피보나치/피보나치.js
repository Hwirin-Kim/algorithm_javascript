const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const totalCount = parseInt(input[0]);
const cases = input.slice(1).map(Number);


const fibArr = [1,2];
while (true){
    const next = fibArr[fibArr.length-1]+fibArr[fibArr.length-2];
    if(next>1000000000) break;
    fibArr.push(next);
}

for (let i=0; i<totalCount; i++){
    let n = cases[i];
    const result = [];
    for(let j=fibArr.length-1; j>=0; j--){
        if(fibArr[j]<=n){
            result.push(fibArr[j]);
            n-=fibArr[j];
            if(n===0) break
        }
    }
    console.log(result.reverse().join(' '))
}

