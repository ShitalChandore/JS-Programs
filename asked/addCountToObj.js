let obj = [
  { language: "Javascript" },
  { language: "Typescript" },
  { language: "Javascript" },
  { language: "Ts" },
  { language: "C++" },
  { language: "Typescript" },
];
let resObj = {};

let resArray = [];

for (let i = 0; i < obj.length; i++) {
  let key = obj[i].language;
  resObj[key] = (resObj[key] ?? 0) + 1;
}

for (let obj in resObj) {
  resArray.push({ language: obj, count: resObj[obj] });
}
console.log(resArray);

// const resArray = Object.entries(
//   obj.reduce((acc, { language }) => {
//     acc[language] = (acc[language] ?? 0) + 1;
//     return acc;
//   }, {})
// ).map(([language, count]) => ({ language, count }));
