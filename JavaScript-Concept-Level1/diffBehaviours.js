/*
* Querky Behaviour Of JavaScript
*/
const details = {
    name: {
        firstName : "Siddharth",
        lastName : "Bisht"
    },
    age : 22
}
details.age = 23; // ? now the object type is const but then also I can change the value inside 
// * To not allow JS to change the KVP of our object we a method called Object.freeze(objectName)
Object.freeze(details);
// now if I try to change the age then I can't but.
details.age = 24;
// * but I can change inner object body again
details.name.firstName = "Sid"
console.log(details);

// One of the example of the different behaviour of JavaScript