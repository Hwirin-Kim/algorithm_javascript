let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]

let filteredArray = input.split('-').filter(arg=>arg!=='-')

let answer = 0;
for (let i = 0; i< filteredArray.length; i++){
   let number = filteredArray[i].split("+").filter(item=>item!=='+').map(Number).reduce((a,b)=>a+b)
   if(i===0){
       answer+=number
   }else{
       answer-=number
   }
}
console.log(answer)