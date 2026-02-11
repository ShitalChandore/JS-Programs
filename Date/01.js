const start = Date.now();
for (let i = 0; i < 1e7; i++) {
  Math.sqrt(i);
}
const end = Date.now();
console.log(end - start, "difference");
