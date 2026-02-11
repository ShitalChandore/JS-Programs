let arr = [1, 0, 2, 0, 3, 0];
let nonZero = arr.filter((num) => num !== 0);
let zeros = arr.length - nonZero.length;
let outputArr = [...nonZero, ...Array(zeros).fill(0)];
console.log(outputArr,);
