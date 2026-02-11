console.log("First");

setTimeout(() => {
  console.log("Second");
}, 10);

setTimeout(() => {
  console.log("Third");
}, 0);

console.log("Fourth");

//First,Fourth,Third,Second
