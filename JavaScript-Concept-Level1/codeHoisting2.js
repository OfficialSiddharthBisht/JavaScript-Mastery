let names = "Siddharth";

function changeName(){
    names = "sid";
    console.log("Inner " + names);
}
changeName();  // Execution Context just executes

console.log("Outer " + names); // Will take name from the global context