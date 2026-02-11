let obj = { key: "constructor" };
// let key = "constructor";
if (Object.hasOwn(obj, "key")) {
  console.log("Key found!");
} else {
  console.log("key not found!");
}
