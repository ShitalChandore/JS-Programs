function greet(name) {
  console.log("hello, ", name);
}
function throttle1(func, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    console.log(now - lastcall, delay, args, lastcall);

    if (now - lastcall >= delay) {
      lastcall = now;
      func.apply(this, args);
    }
  };
}
let throttledGreet = throttle1(greet, 1000);
throttledGreet("Parvati");
setTimeout(() => {
  throttledGreet("Neha");
}, 1200);
throttledGreet("ABC");
