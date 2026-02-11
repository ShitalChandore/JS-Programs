let objArr = [{name:"shital",age:20},{name:"nisha",age:30},{name:"shital",age:20}]
const uniqueArray = objArr.filter((value,index)=>{
let _value = JSON.stringify(value);
  return index ===(objArr.findIndex((obj)=>{
    return _value === JSON.stringify(obj)
}))
})
console.log(uniqueArray)

