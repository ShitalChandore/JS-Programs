function add(a, b) {
  return arguments[0] + b;
}

let arr = [1, 2, 3, 4];
arr[20] = "hi there";

console.log(add(4, 44));
console.log(arr.length, arr[15]);
