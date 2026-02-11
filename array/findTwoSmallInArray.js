// function findTwoSmallInArray(arr) {
//   if (arr.length >= 2) {
//     let first = Infinity;
//     let second = Infinity;
//     for (let a of arr) {
//       if (first >= a) {
//         first = a;
//         console.log(first + "*");
//       } else if (second >= a) {
//         second = a;
//       }
//     }
//     return [first, second];
//   }
// }
// let arr = [89, 78, 3, 0, 4, 78];

// console.log(findTwoSmallInArray(arr));
function findTwoSmallInArray(arr) {
  if (arr.length >= 2) {
    let first = Infinity;
    let second = Infinity;
    for (let a of arr) {
      if (a < first) {
        second = first; // shift old first
        first = a;
      } else if (a < second && a !== first) {
        second = a;
      }
    }
    return [first, second];
  }
}
let arr = [89, 78, 3, 0, 4, 78];
console.log(findTwoSmallInArray(arr)); // [0, 3]
