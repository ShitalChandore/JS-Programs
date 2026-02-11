console.log("Start");

setTimeout(() => {
  console.log("Timeout");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");

//Start,End,Microtask,Timeout,Promise inside Timeout
