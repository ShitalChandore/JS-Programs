let arr = [0, 1, 2, 3, 4, 5, 6];
let res = arr
  .filter((num) => num > 3)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num);
console.log(res);
