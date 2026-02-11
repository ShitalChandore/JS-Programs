let fullName = "shital krushna chandore";
let arr = [1, 2, 3];
console.log(fullName[0], arr[0]);
fullName[0] = "K"; // strings are immutable in js
arr[0] = 99;
console.log(fullName[0], fullName);
console.log(arr[0], arr);
let fullName2 = "K" + fullName.slice(1);
console.log(fullName2);
