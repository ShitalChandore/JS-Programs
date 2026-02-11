let arr = [1, 3, 4, 100];
let sorted = true;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i + 1]);

  if (arr[i] > arr[i + 1]) {
    console.log("not sorted");
    break;
  }
}
