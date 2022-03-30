// Assume that the list of users is coming from an API 
const users = [
    {firstName : "Siddharth" , lastName: "Bisht" , age :21},
    {firstName : "Priyanka" , lastName : "Bisht" , age :21},
    {firstName : "Som" , lastName : "Rawat", age : 22},
    {firstName : "Kiana", lastName : "Bisht" , age : 5},
    {firstName : "Elon" , lastName : "Musk" , age : 45}
];
// Print the full name of all the users

const fullName = users.map((person)=>{
    return person.firstName + " " + person.lastName;
});
console.log(fullName);