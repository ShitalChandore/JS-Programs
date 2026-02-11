function greet(name, name2, name3) {
  console.log("Hello, ", name, name2, name3);
}

function debounce(func, delay) {
  let timer;
  return function (args1, args2, arg3) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args1, args2, arg3);
    }, delay);
  };
}

const start = Date.now();
debounce(greet, 5000)("parvati", "neha", "abc");
const end = Date.now();
console.log(end - start);
