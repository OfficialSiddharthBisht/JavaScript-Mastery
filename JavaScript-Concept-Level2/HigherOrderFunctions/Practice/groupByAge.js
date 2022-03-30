// Assume that the list of users is coming from an API 
const users = [
    {firstName : "Siddharth" , lastName: "Bisht" , age :21},
    {firstName : "Priyanka" , lastName : "Bisht" , age :21},
    {firstName : "Som" , lastName : "Rawat", age : 22},
    {firstName : "Kiana", lastName : "Bisht" , age : 5},
    {firstName : "Elon" , lastName : "Musk" , age : 45}
];

// Print how many people are of same and different ages
// eg - {21 : 2 , 22 : 1 , 5 : 1 , 45: 1}
const ages = users.reduce((accObj , curr)=>{
    if(accObj[curr.age]){
        accObj[curr.age]++;
    }else{
        accObj[curr.age] = 1;
    }
    return accObj;
},{});

console.log(ages);