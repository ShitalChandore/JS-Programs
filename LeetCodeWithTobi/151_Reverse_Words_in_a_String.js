function reverseWordInStr(str) {
  let reversedWords = "";
  let formattedStr = str.replace(/\s+/g, " ").trim().split(" ");

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedWords += formattedStr[i];
  }
  return reversedWords;
}
console.log(reverseWordInStr("Hi there  whats up!     l"));
