let value = 3;
switch(value){
    case 1: 
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    default:
        console.log("None");
        break;
}
console.log("------------------");
// * What if we don't use break ?
/* The condition or the cases will work as it is until it meets break */
switch(value){
    case 1: 
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
    case 4:
        console.log("Four");
    default:
        console.log("None");
}