function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
  const gcdLen = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLen);
}
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
