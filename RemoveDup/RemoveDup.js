function removeDup(nums){
    let output=[];
    for(let number of nums){
        console.log(output.indexOf(number))
        if(output.indexOf(number)===-1){
            output.push(number)
        }
    }
return output;
}
console.log(removeDup([10,10,1,2,2,1]))