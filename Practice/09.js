const peoples = [
  { name: "shital", age: 20 },
  { name: "maya", age: 45 },
  { name: "neha", age: 40 },
  { name: "kavero", age: 60 },
  { name: "abc", age: 20 },
];

// let output = people
//   .filter((obj) => {
//     return obj.age > 40;
//   })
//   .map((obj) => {
//     return obj.name;
//   });
// console.log(output);
let outputarr = [];
for (let people of peoples) {
  if (people.age > 40) {
    outputarr.push(people.name);
  }
}
console.log(outputarr);
