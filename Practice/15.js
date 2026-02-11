function human(name1, name2) {
  this.firstName = name1;
  this.lastName = name2;
}

let obj1 = new human();
let obj2 = new human("shital", "chandore");
let obj3 = human("key", "key");

console.log(obj1);
console.log(obj2);
console.log(obj3);
