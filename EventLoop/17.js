console.log("Sync 1");

setTimeout(() => {
  console.log("Macro 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Micro 1");
});

console.log("Sync 2");

setTimeout(() => {
  console.log("Macro 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Micro 2");
});

//Sync 1,Sync 2,Micro 1,Micro 2,Macro 1,Macro 2
