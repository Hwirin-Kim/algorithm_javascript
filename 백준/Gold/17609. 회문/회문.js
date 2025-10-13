const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


const inputLength = parseInt(input[0]);
const arr = input.slice(1);



const check = (word, start, end) => {
  while (start < end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else return false;
  }
  return true;
};

const is회문 = (word, start, end) => {
  while (start < end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else {

      if (check(word, start + 1, end) || check(word, start, end - 1)) return 1;
      else return 2;
    }
  }
  return 0;
};

for (let i = 0; i < inputLength; i++) {
  const str = arr[i];

  console.log(is회문(str, 0, str.length - 1));
}
