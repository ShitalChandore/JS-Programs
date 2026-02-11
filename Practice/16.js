// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// function anyNumOfArg(...rest) {
//   let output = 1;
//   for (let element of rest) {
//     output *= element;
//   }
//   return output;
// }

// console.log(anyNumOfArg(1, 2, 3, 4, 2));
// let obj = { a: 1, b: 2, c: 3 };
// let { a, ...rest } = obj;
// console.log(a, rest, ..."helloo");
// const arr = [1, 2, 3];
// console.log([...arr, 4]);
// const [x, ...y] = [10, 20, 30];
// console.log(x, y);
// function greet(g1, g2, g3) {
//   console.log(`${g1}, ${g2}, and ${g3}!`);
// }
// const names = ["Shital", "Aarav"];
// greet(..."He", names);

// let arr = { one: "One", five: "five", zero: "zero" };
// let abc = arr.sort((a, b) => b - a).join(" ");
// console.log(abc);

let sort = [4, 6, 1, 9, 5];

for (let i = 0; i < sort.length - 1; i++) {
  for (let j = i + 1; j < sort.length; j++) {
    if (sort[i] > sort[j]) {
      let temp = sort[i];
      sort[i] = sort[j];
      sort[j] = temp;
      console.log(sort[i] > sort[j], sort[i], sort[j]);
    }
    console.log(sort);
  }
  //   console.log(sort);
}
