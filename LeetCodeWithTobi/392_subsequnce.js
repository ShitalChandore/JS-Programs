// 392. Is Subsequence
function subSeq(str1, str2) {
  let length = null;
  if (str1.length > str2.length || str1.length == 0) {
    return false;
  } else {
    length = str2.length;
  }
  let index = 0;
  for (let i = 0; i < length; i++) {
    if (str1[index] == str2[i]) index++;
  }
  return index === str1.length ? true : false;
}
console.log(subSeq("pab", "wfkfajfjfbp"));
