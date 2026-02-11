let str = "Hello,  World! 123";
let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
console.log(cleanedStr);
