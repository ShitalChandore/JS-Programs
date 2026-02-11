function mergeAlterNatively(str1, str2) {
  let max = Math.max(str1.length, str2.length);
  let alternateString = [];
  for (let i = 0; i < max; i++) {
    if (str1[i]) {
      alternateString.push(str1[i]);
    }
    if (str2[i]) {
      alternateString.push(str2[i]);
    }
  }
  return alternateString.join("");
}
console.log(mergeAlterNatively("sh", "ital"));
console.log(mergeAlterNatively("a", "vddddd"));
console.log(mergeAlterNatively("kakisamu", "sa"));
