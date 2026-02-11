setTimeout(() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });
});

//C,D,A,B
