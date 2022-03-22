add5(10);
// add10(50);
  // This will give error


function add5(num){
    console.log(num + 5);
}


let add10 = function(num){
    console.log(num + 10);
}

add10(60); // here it will work
/*
*In the add5 function global execution contxt collects the function and made available fir the whole file

* In the add10 the function are treated just as normal variables.
*/
console.log(names); // will give us undefined.
console.log(age); // will give an error
var names = "Siddharth";

