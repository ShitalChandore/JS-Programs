let arr1 = [1, 2, 3, 6, 7];
let arr2 = [2, 4, 5, 3];

let arr1Res = [];
let arr2Res = [];
let commonElemets = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      commonElemets.push(arr1[i]);
    }
    // if (j == arr2.length - 1) {
    //   console.log(arr1[i]);
    // }
  }
}
// console.log(commonElemets);

for (let i = 0; i < arr1.length; i++) {
  if (!(commonElemets.indexOf(arr1[i]) != -1)) {
    arr1Res.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (!(commonElemets.indexOf(arr2[i]) != -1)) {
    arr2Res.push(arr2[i]);
  }
}
console.log(arr1Res);
console.log(arr2Res);
