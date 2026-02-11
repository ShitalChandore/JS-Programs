// console.log(b); //ReferenceError: b is not defined
// let b; // ReferenceError: Cannot access 'b' before initialization
let y = 20;
function testY() {
  console.log(y);
  let y = 40;
  console.log(y);
}
testY();
