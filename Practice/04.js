function check() {
  throw new Error("Name can't be empty");
}
function show(name = check()) {
  console.log(name);
}
show("mayavati");
show();
