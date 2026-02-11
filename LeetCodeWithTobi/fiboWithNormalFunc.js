function calFibo(num) {
  let a = 0;
  let b = 1;
  let i = 2;
  while (i <= num) {
    if (num < 2) return num;
    [a, b] = [b, a + b];
    i++;
  }
  return b;
}
console.log(calFibo(10));

// 0 1 2  3 4 5

// 0 1 1 2 3 5 8 13

// n1=0
// n2 = 1

// fibo n1+n2

// n1 = 1;
// n2 = 1
// fibo = 2

// n1 = 1
// n2 = 2
// fibo 3

// n1 = 2
// n2 = 3
// fobo 5
