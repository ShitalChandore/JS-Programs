let arr = [1, 3, 0, 45, 2, 0, 4, 9, 9, 0];
let i = 0;
for (let num of arr) {
  if (num !== 0) {
    console.log(num);
    arr[i] = num;
    i++;
  }
}
while (i < arr.length) {
  arr[i] = 0;
  i++;
}
console.log(arr);
