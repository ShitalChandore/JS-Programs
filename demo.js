// let str = "maya";
// let obj = {};
// for (let letter of str) {
//   obj[letter] = (obj[letter] ?? 0) + 1;
// }
// console.log(obj);

// let a = 3;
// console.log(0 || 4);

// let a = 0;
// console.log(a ?? "maya");

// let obj = { name: "abc", address: "pune" };
// foo(obj);
// console.log(obj);

// function foo(obj) {
//   obj.name = "shital";
//   obj = { name: "kruti", address: "benglure" };
// }

let str = "reverse this string".split(" ");

let reversedStr = "";
function returnReverse() {
  for (let word of str) {
    // for (let j = word.length - 1; j >= 0; j--) {
    //   reversedStr += word[j];
    // }
    // reversedStr += " ";

    let splittedWord = word.split("");
    let length = splittedWord.length;
    for (let i = 0, j = length - 1; i < length / 2; j--, i++) {
      let temp = splittedWord[i];
      splittedWord[i] = splittedWord[j];
      splittedWord[j] = temp;
    }
    // splittedWord += splittedWord.join("") + " ";
    reversedStr += splittedWord.join("") + " ";
  }
  return reversedStr;
}
console.log(returnReverse(str));

// let str = "ab";
// str[0] = " e";
// str[1] = "s";
// console.log(str[0]);
