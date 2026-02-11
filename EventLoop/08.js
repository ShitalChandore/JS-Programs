console.log("Start");

setTimeout(() => {
  console.log("Timer");

  Promise.resolve().then(() => {
    console.log("Promise inside Timer");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise outside Timer");
});

console.log("End");

//Start,End,Promise outside Timer,Timer,Promise inside Timer
