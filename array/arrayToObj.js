let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
let obj = {};
for (let a of arr) {
  obj[a.id] = a;
}

console.log(obj);
