console.log("One");

queueMicrotask(() => {
  console.log("Two");
});

setTimeout(() => {
  console.log("Three");
}, 0);

Promise.resolve().then(() => {
  console.log("Four");
});

console.log("Five");

//One,Five,Two,Four,Three
