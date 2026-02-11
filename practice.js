// let nestedArr = [4, [5, [6, 8]], 20];

// const flattenedArray = (nestedArr, result = []) => {
//   for (let i = 0, length = nestedArr.length; length > i; i++) {
//     let value = nestedArr[i];
//     if (Array.isArray(value)) {
//       flattenedArray(value, result);
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// };
// console.log(nestedArr);
// console.log(flattenedArray(nestedArr));

let nestedArr = [4, [5, [6, 8]], 20];
function flatArray(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (Array.isArray(value)) {
      flatArray(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}
console.log(flatArray(nestedArr));
