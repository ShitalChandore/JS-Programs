// "use strict";
function incCount() {
  //   this.counter = 90;
  setInterval(() => {
    this.counter++;
    console.log(this.counter);
  }, 1000);
}
new incCount();
