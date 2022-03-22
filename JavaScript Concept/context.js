sayHello();
// The function sayHello can run even before it is declared --> Global Context Of JavaScript

function sayHello(){
    console.log("Hello");
}

sayHello();

//* JavaScript has a bigger context in which it resides everything
// ? Run the code in console
let myname = "Siddharth";
if(myname === window.myname){
    console.log("True Statement");
}  
// ? Here the context is window , but if we run the same code in node or any Js Engine then it is gonna throw an error cauz the global context is not availabe in the node as window , but there is always a global context and whenever we decare a function it puts it in global context and we can use that even before we declare it.

/*
* There are two types of context one is global and other is executing right now.
 */
let num = 2; // Global Context collecting information about the code.  
// Global context
function sayMe(){
    console.log(" Say Me");
}

sayMe(); // execution context 