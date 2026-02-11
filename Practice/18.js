function findLongestSubstring(s) {
  let map = new Map();
  let maxLenghtSubstring = 0;
  let start = 0;
  let longestSubString = "";

  for (let end = 0; end < s.length; end++) {
    let currentChar = s[end];
    if (map.has(currentChar) && map.get(currentChar) >= start) {
      start = map.get(currentChar) + 1;
    }

    map.set(currentChar, end);

    if (end - start + 1 > maxLenghtSubstring) {
      maxLenghtSubstring = end - start + 1;
      longestSubString = s.slice(start, end + 1);
    }
  }
  return longestSubString;
}

console.log(findLongestSubstring("shital"));
