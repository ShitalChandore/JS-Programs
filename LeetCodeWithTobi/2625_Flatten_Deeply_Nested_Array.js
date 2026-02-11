let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [10], 11], 12], [13, 14, 15]];

function flattenArr(arr, n) {
  if (n < 0) {
    return [arr];
  }

  const res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flattenArr(item, n - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flattenArr(arr, 1));
