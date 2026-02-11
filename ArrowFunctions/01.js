function getCity(cityName) {
  this.cityName = cityName;
  let obj = {
    cityName: "pune",
    getCityName: () => {
      return this.cityName;
    },
  };
  return obj;
}
console.log(getCity("payal").getCityName());
console.log(getCity("murti").getCityName());
