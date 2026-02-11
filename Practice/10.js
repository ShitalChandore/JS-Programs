let arr = [1, 2, 2, 3, 4, 4, 5, 9090];
let obj = {};
for (let element of arr) {
  obj[element] = (obj[element] ?? 0) + 1;
}
console.log(Object.keys(obj).map(Number));
