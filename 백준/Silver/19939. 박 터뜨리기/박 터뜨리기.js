const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const [ball,team] = input

const minDiff = (ball,team)=>{
   const baseSum = team*(team+1)/2
   if(ball<baseSum) return -1;
    
   const remain = ball-baseSum;
  
    const arr = Array.from({length:team},(_,i)=>i+1);
    
    for(let i = team-1; i>=0&&remain>0; i--){
        arr[i]+=Math.floor(remain/team);
    }
    let extra = remain % team;
    for (let i=team-1;i>=team-extra; i--){
        arr[i]++;
    }
    return arr[team-1]-arr[0]
}
console.log(minDiff(ball,team))

