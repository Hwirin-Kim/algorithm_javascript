let fs = require('fs')
let [goal,number] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)


let count = 1;

const func = (input)=>{
    if(input%2===0){
        let a = input/2
        count++;
        if(a===goal){
            return;
        }
        func(a)
    }else {
        let str = input.toString()
        if(str[str.length-1]!=="1"){
            count = -1
            return;
        }else{
            let b = parseInt(str.substring(0,str.length-1))
            count++;
           if(b===goal){
               return;
           }
            func(b)
        }
    }
}
func(number)
console.log(count)