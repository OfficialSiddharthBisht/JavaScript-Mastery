
function isEven1(element){
    if(element % 2 === 0){
        return true;
    }
    return false;
}

function isEven2(element){
    return element % 2 === 0;
}

let isEven3 = function(element){
    return element % 2 === 0;
}

let isEven4 = (element) =>{
    return element % 2 === 0;
}
// * All the 4 functions means same its just different ways to write the functions
console.log(isEven1(2));
console.log(isEven2(2));
console.log(isEven3(2));
console.log(isEven4(2));