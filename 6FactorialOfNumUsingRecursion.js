function findFact(num) {
  for (let i = 2; i <= num; i++) {
    if (num == 2) return 1;
    return findFact(num--);
  }
}
console.log(findFact(4));
// findFact(4);
// findFact(3);
// findFact(2);1
