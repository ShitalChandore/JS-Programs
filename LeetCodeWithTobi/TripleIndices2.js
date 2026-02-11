function findTripletIndices(arr) {
  let first = Infinity;
  let second = Infinity;
  for (let a of arr) {
    if (a <= first) first = a;
    else if (a <= second) second = a;
    else return true;
  }
  return false;
}
let nums = [5, 4, 3, 2, 1];
console.log(findTripletIndices(nums));
