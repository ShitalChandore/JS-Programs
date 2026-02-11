let arr = [1, 1, 1, 4, 2, 3, 3, 4];
let output = {};
for (let num of arr) {
  output[num] = (output[num] || 0) + 1;
}
let freq = arr.filter((num) => {
  return output[num] <= 2;
});

for (let obj in output) {
  if (output[obj] === 2) {
    console.log(obj);
  }
}
