console.log("X");

Promise.resolve().then(() => {
  console.log("Y");
});

queueMicrotask(() => {
  console.log("Z");
});

console.log("W");

// X,Z,W,Y

//X,W,Y,Z
