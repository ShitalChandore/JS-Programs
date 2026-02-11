let obj = {
  animal: "dong",
  person: {
    firstname: "shital",
    lastName: "chandore",
    address: {
      permentAdd: "abc",
      currentAdd: "XYZ",
      pincode: {
        pincode1: 123,
        pincode2: 45939,
      },
    },
  },
};

function nestedObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      nestedObj(obj[key]);
    } else {
      console.log(`${key} :  ${obj[key]}`);
    }
  }
}
nestedObj(obj);
