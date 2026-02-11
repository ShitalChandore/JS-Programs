let str = "acggdhjjjkojaae";
let output = [];
for (let letter of str) {
  if (output.indexOf(letter) == -1) {
    output.push(letter);
  }
}
console.log(output.join(""));
for (let i = 0; i < output.length; i++) {
  for (let j = i + 1; j < output.length; j++) {
    if (output[i] > output[j]) {
      let temp = output[i];
      output[i] = output[j];
      output[j] = temp;
    }
  }
}
console.log(output.join(""));
