let arr = [1, 4, 53, 3, 4, 1];
let outArr = [];
for (let a of arr) {
  if (outArr.indexOf(a) == -1) {
    outArr.push(a);
  }
}
console.log(outArr);
