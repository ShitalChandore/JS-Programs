function findLongestSub(s) {
  const charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;
  let longestSubStr = "";

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (
      charIndexMap.has(currentChar) &&
      charIndexMap.get(currentChar) >= start
    ) {
      start = charIndexMap.get(currentChar) + 1;
    }

    charIndexMap.set(currentChar, end);

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestSubStr = s.slice(start, end + 1);
    }
    console.log(start, end);
  }
  console.log(charIndexMap);

  return longestSubStr;
}
console.log(findLongestSub("shitalsh"));

// let str = "aab";
// console.log(str.slice(0, 1));
