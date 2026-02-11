let str = "shital krushna chandore hingoli nashik".split(" ");
let output = "";
for (let word of str) {
  output += word[0].toUpperCase() + word.substring(1, word.length) + " ";
}
console.log(output);
