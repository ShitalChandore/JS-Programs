let num = 123;
let result = 0;

while (num != 0) {
  let r = num % 10;
  result = result * 10 + r;
  num = Math.floor(num / 10);
  console.log(num);
}

console.log(result);
