let obj = {
  name: "shital",
  address: {
    dist: "hingoli",
    pincode: 423401,
    mobileNumbers: {
      firstMob: 9096131566,
      secondMob: 9322939812,
    },
  },
};

const rec = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      rec(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
};

rec(obj);
