var fs = require("fs");
var input = fs.readFileSync('dev/stdin').toString();
input = input.split(" ");
console.log(input[0] / 1 + input[1] / 1);
