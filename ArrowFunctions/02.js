let Person = () => {
  this.username = "neha@parvati";
  this.getname = () => {
    console.log(this.username);
  };
};
let personObj = new Person();
personObj.getname();
