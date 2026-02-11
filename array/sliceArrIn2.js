let arr = [1, 6, 4, 3, 6, 14];
let chunks = [];
let size = 2;
for (let i = 0; i < arr.length; i += size) {
  chunks.push(arr.slice(i, i + 2));
}
console.log(chunks);
