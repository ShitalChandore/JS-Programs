let arr = [19, 48, 50];
for (let element in arr) {
  console.log(11 in arr);
}

for (let element of arr) {
  console.log(element);
}

arr.forEach((one, two, three) => {
  console.log(one, two, three);
});
