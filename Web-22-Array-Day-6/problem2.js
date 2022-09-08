//Problem 2 : Given a character in lower case print the upper case character

let arr = ["tony stark", "thor", "spiderman", "steve rogers"];
let upper = arr.map(element => {
  return element.toUpperCase();
});
console.log(upper);