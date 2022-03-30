// Assume that the list of users is coming from an API 
const users = [
    {firstName : "Siddharth" , lastName: "Bisht" , age :21},
    {firstName : "Priyanka" , lastName : "Bisht" , age :21},
    {firstName : "Som" , lastName : "Rawat", age : 22},
    {firstName : "Kiana", lastName : "Bisht" , age : 5},
    {firstName : "Elon" , lastName : "Musk" , age : 45}
];
// Take out and print all the first names of users which have age less then or equal to 21
const firstName = users.filter(person =>(person.age <= 21)).map((person)=>person.firstName);

console.log(firstName);