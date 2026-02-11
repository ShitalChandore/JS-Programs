console.log("Alpha");

setTimeout(() => {
  console.log("Beta");
}, 0);

Promise.resolve().then(() => {
  console.log("Gamma");

  setTimeout(() => {
    console.log("Delta");
  }, 0);
});

console.log("Omega");

//Alpha,Omega,Gamma,Beta,Delta
