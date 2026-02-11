let obj = { a: 1, b: 2, c: 3, d: 4 };
// console.log(obj);
//first way
// for (const key in obj) {
//   console.log(obj[key]);
// }
//second way
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(obj[key]);
// });

// third way to get values

// Object.values(obj).forEach((element) => {
//   console.log(element);
// });

//forth way

let foreachReturnValue = Object.keys(obj).forEach((key) => {
  return obj[key];
});

// Object.entries(obj).map(([key, value]) => {
//   console.log("first", obj[key]);
// });

// // third way to get values

// Object.values(obj).map((element) => {
//   console.log("Second", element);
// });

//forth way

let mapReturnValue = Object.keys(obj).map((key) => {
  return obj[key];
});

console.log(foreachReturnValue, mapReturnValue);

for (let keys of Object.values(obj)) {
  console.log(keys);
}
