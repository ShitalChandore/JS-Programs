"use strict";
function incrementCounter() {
  this.counter = 0;

  setInterval(() => {
    this.counter++;
    console.log(this.counter);
  }, 1000);
}

new incrementCounter();
