function serachList(name, name3) {
  console.log("searching list....", name, name3);
}

function throttle(callback, delay) {
  let isWaiting = false;
  return function (...args) {
    console.log(isWaiting);
    if (!isWaiting) {
      isWaiting = true;
      callback.apply(this, args);
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  };
}

let throttlSearchHandler = throttle(serachList, 1000);
throttlSearchHandler("abc", "xyz");
setTimeout(() => throttlSearchHandler("pqr", "2000"), 2000);
throttlSearchHandler("xyz", "xyz");
