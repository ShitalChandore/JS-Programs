const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
let key = "klkkl";
let modified = kvArray.map(({ key, value }) => {
  return { [key]: value };
});
console.log(modified);
