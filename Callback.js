// what is callback
// A callback function is simply a function that you pass into another function so that it can be called back (executed)
//  at a later time.

// Synchronous callback

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // called immediately
}

greet("Alice", () => {
  console.log("Nice to meet you!");
});

//   Example 2: Asynchronous callback (macrotask)
setTimeout(() => {
  console.log("This runs later");
}, 0);

console.log("This runs first");

//   Example 3: Asynchronous callback (microtask)
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("Synchronous log");
