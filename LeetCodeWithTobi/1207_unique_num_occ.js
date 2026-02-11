let arr = [1, 2, 2, 1, 1, 3];
let obj = {};
let uniqueArr = [];
for (let element of arr) {
  if (!obj[element]) {
    obj[element] = true;
    uniqueArr.push(element);
  }
}
console.log(uniqueArr);
