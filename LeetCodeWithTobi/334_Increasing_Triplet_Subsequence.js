// Given an integer array nums, return true if there exists a
// triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
//  If no such indices exists, return false.
//Increasing_Triplet_Subsequence
function incTripletSeq(arr) {
  let first = Infinity;
  let second = Infinity;

  for (let num of arr) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
}
console.log(incTripletSeq([1, 2, 2, 0]));
