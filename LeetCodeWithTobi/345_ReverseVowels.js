let str = "IceCreAm".toLowerCase().split("");
// console.log(str);
let vovels = new Set(["a", "e", "i", "o", "u"]);
let i = 0,
  j = str.length - 1;
while (i < j) {
  if (!vovels.has(str[i])) {
    i++;
    continue;
  }

  if (!vovels.has(str[j])) {
    j--;
    continue;
  }
  [str[i], str[j]] = [str[j], str[i]];
  i++, j--;
}
console.log(str.join(""));

/* 
I c e C r e A m
A c e C r e I m


"l e e t c o d e"
l e o t c e d e 
l e o t c e d e
*/
