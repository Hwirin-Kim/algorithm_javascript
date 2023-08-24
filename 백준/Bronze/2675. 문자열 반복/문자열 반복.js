let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
for (let i = 1; i < input.length; i++) {
  let answerArr = [];
  let repeatCnt = Number(input[i].split(" ")[0]);
  let string = input[i].split(" ")[1];
  for (let alphabet of string) {
    answerArr.push(alphabet.repeat(repeatCnt));
  }
  console.log(answerArr.join(""));
}