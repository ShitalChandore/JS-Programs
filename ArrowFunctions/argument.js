function Foo(a, b) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
}
// Foo(1, 2);

const FooArrow = (...a) => {
  console.log(a[0]);
  console.log(a[1]);
};
FooArrow(1);
