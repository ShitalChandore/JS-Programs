console.log("Begin");

setTimeout(() => {
  console.log("Macro A");

  Promise.resolve().then(() => {
    console.log("Micro inside Macro A");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Micro B");

  setTimeout(() => {
    console.log("Macro inside Micro B");
  }, 0);
});

console.log("Finish");

//Begin,Finish,Micro B,Macro A,Micro inside Macro A,Macro inside Micro B
