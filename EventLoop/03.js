console.log("1");
setTimeout(() => {
  console.log("2 - setTimeout");

  Promise.resolve().then(() => {
    console.log("3 - microtask inside setTimeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4 - first Promise");

  setTimeout(() => {
    console.log("5 - setTimeout inside Promise");
  }, 0);
});

queueMicrotask(() => {
  console.log("6 - queueMicrotask");
});

console.log("7");

//1,7,4 - first Promise,6 - queueMicrotask,2 - setTimeout,3 - microtask inside setTimeout,5 - setTimeout inside Promise"
// 1, 6 - queueMicrotask , 7 , 4 - first Promise,2 - setTimeout,3 - microtask inside setTimeout,5 - setTimeout inside Promise
