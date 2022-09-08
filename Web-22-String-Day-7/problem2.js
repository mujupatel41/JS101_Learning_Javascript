//Problem 2 : Given an array of string count the overall total number of characters

let string = ("Given an array of string count the overall total number of characters");
let count = 0;
for(let i = 0;i<=string.length-1;i++){
  count = count+string[i].length;
}
console.log(count);