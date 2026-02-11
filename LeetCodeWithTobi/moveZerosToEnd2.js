let arr = [0, 78, 3, 0, 4, 78, 9, 8, 0];

let nonZeros = arr.filter((num) => num != 0);
let zeros = arr.length - nonZeros.length;

while (zeros--) {
  nonZeros = [...nonZeros, ...Array(zeros).fill(0)];
}
console.log(nonZeros);
