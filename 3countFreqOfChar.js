let strName = "ello";
// let numbers = [1, 2, 2, 3, 3, 3];
// let tags = ["tech", "fashion", "tech", "food"];
// let sentence = "hello world hello universe";
let countFreq = {};
for (let char of strName) {
  //   countFreq[char] = countFreq[char] ? ++countFreq[char] : 1;
  countFreq[char] = (countFreq[char] || 0) + 1;
}
console.log(countFreq);
