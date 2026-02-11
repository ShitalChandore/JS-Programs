let str = "leetcode".split("");
let l = 0;
let r = str.length - 1;

function isVovel(ch) {
  return "aeiouAEIOU".includes(ch);
}
while (l < r) {
  if (!isVovel(str[l])) {
    l++;
  } else if (!isVovel(str[r])) {
    r--;
  } else {
    console.log(str[l], str[r]);

    [str[l], str[r]] = [str[r], str[l]];
    l++;
    r--;
  }
}

console.log(str.join(""));
