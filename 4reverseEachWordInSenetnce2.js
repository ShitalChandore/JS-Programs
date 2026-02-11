let setntece = "Javascript programs";
let words = setntece.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].split("").reverse().join("");
}
console.log(words.join(" "));
