console.log("start");
setTimeout(() => {
  console.log("inside settiout1");
}, 0);
(function () {
  console.log("Inside Immediately invoked functon");
  Promise.resolve().then(() => console.log("after [rp,ose resp;bve"));
})();

Promise.resolve().then(() => console.log("resolving..."));
setTimeout(() => {
  console.log("inside settiout2");
}, 0);

console.log("finish");
/**
 * start
 * Inside Immediately invoked functon
 * finish
 * after [rp,ose resp;bve
 * resolving...
 * inside settiout1"
 * inside settiout2
 * finish
 */
