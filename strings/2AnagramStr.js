function isAnagram(str1, str2) {
  const cleanString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanStr1 = cleanString(str1);
  const cleanStr2 = cleanString(str2);
  let str1Obj1 = {};
  let str1Obj2 = {};
  for (char of cleanStr1) {
    str1Obj1[char] = (str1Obj1[char] || 0) + 1;
  }
  console.log(str1Obj1);

  for (char of cleanStr2) {
    str1Obj2[char] = (str1Obj2[char] || 0) + 1;
  }
  console.log(str1Obj2);

  for (char in str1Obj1) {
    if (str1Obj1[char] != str1Obj2[char]) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("Debit Card", "Bad Credit"));
