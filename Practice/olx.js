var length = 20;
function count() {
  this.lenght = 8;
  console.log(this.length);
}
const data = [count, "A", 0, "33", 90];
const obj = {
  length: 44,
  count,
};

"abc".count();
