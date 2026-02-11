function findMaxSubOfGivenLength(str, k) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxCount = 0;
  let count = 0;

  // First window of size k
  for (let i = 0; i < k; i++) {
    if (vowels.has(str[i])) count++;
  }
  maxCount = count;

  console.log(maxCount, `k is ${k}`);

  // Slide the window
  for (let i = k; i < str.length; i++) {
    if (vowels.has(str[i])) count++; // add new char
    if (vowels.has(str[i - k])) count--; // remove old char
    if (count > maxCount) maxCount = count;
  }

  //   return maxCount;
  console.log(maxCount);
}

findMaxSubOfGivenLength("aeiou", 2);
findMaxSubOfGivenLength("abciiidef", 3);
