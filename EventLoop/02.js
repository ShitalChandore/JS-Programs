console.log(1);
const iAmCallback = (func) => {
  console.log(10);
};

Promise.resolve(1).then(() => {
  console.log("resolved");
});
setTimeout(() => {
  console.log("timout");
}, 0);
iAmCallback(10);
console.log(4);

//1 ,4,resolved,I am callback,timout

// iAmCallback(() => { console.log("I am callback"); })

// The function iAmCallback is defined later, but function declarations are hoisted, so it’s available.

// Inside, it immediately calls the passed callback → prints I am callback.
