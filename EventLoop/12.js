setTimeout(() => {
  console.log("Outer Timeout");

  Promise.resolve().then(() => {
    console.log("Inner Promise");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Outer Promise");

  setTimeout(() => {
    console.log("Inner Timeout");
  }, 0);
});

//Outer Promise,Outer Timeout,Inner Promise,"Inner Timeout
