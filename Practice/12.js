const magicOjbect = {
  val: 1,
  get a() {
    return this.val++;
  },
};
console.log(magicOjbect.a);
console.log(magicOjbect.a);
console.log(magicOjbect.a);
