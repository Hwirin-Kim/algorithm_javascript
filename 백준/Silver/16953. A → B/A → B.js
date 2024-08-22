let fs = require('fs')
let [goal,number] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)


let count = 1;

 while (number > goal) { 
        if (number % 2 === 0) {
            number = number / 2;
        } else if (number % 10 === 1) {
            number = Math.floor(number / 10);
        } else {
            count = -1; 
            break;
        }
        count++;
    }

    if (number !== goal) {
        count = -1;  
    }

console.log(count)