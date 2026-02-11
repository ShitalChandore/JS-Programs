let arr = [20, 30, 4, 1, 45, 3, 89, 85, 89];
let largestNum = arr[0];
let secondLargest = null;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestNum) {
    secondLargest = largestNum;
    largestNum = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < largestNum) {
    secondLargest = arr[i];
  }
}
console.log(largestNum, secondLargest);
