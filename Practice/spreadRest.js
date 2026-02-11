// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [...arr1, ...arr2];

// function sum(...numbers) {
//   let sum = 0;
//   for (num of numbers) {
//     console.log(num);
//     sum += num;
//   }
//   return sum;
// }
// sum(1, 2, 3, 4, 5)fdsa

// const user = { name: "Alice", age: 30, city: "Paris" };
// const { name, ...rest } = user;
// console.log(rest);

// `rest` contain { age: 30, city: 'Paris' }

// const nums = [5, 10, 15];
// Math.max(...nums);

// it returns 15

// const obj = { a: 20 };
// let obj2 = { ...obj };
// console.log(obj2);

// let arr = [...obj];

function checkSpread(...params) {
  console.log(params);
}
let obj = { a: 5 };
// let arr = [...obj];
// let arr = [1, 2, 3];
// checkSpread(...arr);

// let obj1 = { ...arr };
// console.log(obj1);

// let obj2 = { ...true, ..."shital", ...10, ...Number };
// console.log("Printing Obj2");

// console.log(obj2);

function myFunction(p, q, x, y, z) {
  console.log(x, y, z);
}
const args = [0, 1];
// myFunction.apply(this, args);
// myFunction(...args, -1, ...{ 0: "shital" });
const dateArr = [1994, 19, 6];
let date = new Date(...dateArr);
console.log(dateArr);

const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d);
