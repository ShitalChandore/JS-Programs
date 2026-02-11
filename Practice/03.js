let obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};
const res = obj.sum.call(obj);
console.log(res);
