var foo = "Lion";
function showName() {
  foo = "tiger";
  return;
  function foo() {
    console.log(foo);
  }
}

showName();
console.log(foo);
