function findMaxSubOfGivenLenght(str, k) {
  let setOfVowel = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  let maxLength = "";
  for (let i = 0; i < k; i++) {
    if (setOfVowel.has(str[i])) {
      count++;
    }
  }
  maxLength = count;
  for (let i = k; i < str.length; i++) {
    if (setOfVowel.has(str[i])) count++;
    if (setOfVowel.has(str[i - k])) count--;
    if (count > maxLength) maxLength = count;
  }
  console.log(maxLength);
}
findMaxSubOfGivenLenght("aeiou", 2);
findMaxSubOfGivenLenght("abciiidef", 3);
