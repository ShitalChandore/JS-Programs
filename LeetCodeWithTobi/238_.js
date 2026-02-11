let nums = [-1, 1];
let resArr = [];
for (let i = 0; i < nums.length; i++) {
  let res = 1;
  for (let j = 0; j < nums.length; j++) {
    if (i !== j) {
      res *= nums[j];
    }
  }
  resArr.push(res === 0 ? 0 : res);
}
console.log(resArr);
// console.log(0 === -0); // true
