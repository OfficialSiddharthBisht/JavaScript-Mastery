// * Maps in JavaScript are key value pairs 

let myMap = new Map();

myMap.set("Name","Siddharth");
myMap.set("Age",21);
myMap.set("Occupation","Software Developer");
console.log(myMap);

let name = myMap.get("Name");
console.log(name);

// ? In for each loop the 1st argument is value and second is key

myMap.forEach((value , key)=>{
    console.log(key,value);
});
console.log(myMap.has("Name"));

console.log("----------------");

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Values are ${value}`);
}

console.log("\n Both Key and value \n");
for(let [key , value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}
console.log(myMap);
myMap.delete("Occupation")
console.log(myMap);
