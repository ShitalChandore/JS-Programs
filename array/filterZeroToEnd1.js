let arr = [1, 0, 2, 0, 3, 0];
let ouputarr = [];
let countOfZero = 0;
for (let a of arr) {
  a === 0 ? countOfZero++ : ouputarr.push(a);
}
while (countOfZero--) {
  ouputarr.push(0);
}
console.log(ouputarr);
