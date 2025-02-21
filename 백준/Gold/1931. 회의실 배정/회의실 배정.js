const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().split('\n')
const totalCount = parseInt(input[0])


let array = [];
  for (let i = 1; i < input.length; i++) {
    const arg = input[i].split(" ").map(Number);
    array.push(arg);
  }

  const sortedArray = array.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let count=0;
  let endTime = 0;

  for (let i = 0; i < sortedArray.length; i++) {
  
      if(sortedArray[i][0]>=endTime){
        endTime = sortedArray[i][1]
          count++
  
    }
  }
  console.log(count);
