// Global Name 
var myname = "Siddharth";
function homeName(){
    var myname = "Siddhu";
    console.log(myname);
    function nickName(){
        var myname = "sid"
        console.log(myname);
    }   
    nickName();
}

console.log(myname);
homeName();
console.log(myname);

/*
Whenever there is curly braces there is a scope but in JS we don't consider
if else or any other conditional statement as scope, rather we only consider
function() as scope.
 
*/