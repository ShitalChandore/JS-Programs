const user = { name: "Dev", joined: new Date() };
console.log(user);
// const copy = JSON.parse(JSON.stringify(user)); //cloning
const copy = structuredClone(user);
console.log(user.joined.getDate());
console.log(copy.joined.getDate());

/*
start 
end
promise
immidiate
next tick
wait for 100 ms




start 
end
next tick
promise
immidiate
wait for 100 ms

*/
