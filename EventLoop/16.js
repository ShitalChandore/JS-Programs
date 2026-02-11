Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timeout inside Promise");
  }, 0);
});

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

// Promise 1,Timeout 1,Promise inside Timeout,Timeout inside Promise
