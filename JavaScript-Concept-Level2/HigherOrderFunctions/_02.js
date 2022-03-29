/* Given the radius of circles in the form of array , find the following seperately :-
? 1 - Diameter
? 2 - Circumference
? 3 - Area
*/

let radiusArr = [2 ,3, 4, 5];

const diameter = (val)=>{
    return 2 * val;
}
const circumference = (val)=>{
    return 2 * Math.PI * val; 
}
const area = (val) =>{
    return Math.PI * val * val;
}
let common = (radiusArr , fun)=>{
    let ans = [];
    for(let i = 0; i < radiusArr.length; i++){
        ans.push(fun(radiusArr[i]));
    }
    return ans;
}

console.log(common(radiusArr,diameter));
console.log(common(radiusArr,circumference));
console.log(common(radiusArr,area));

// ! We achieved our goal but DRY principle is violated we are repeating our code again and again . This can be optimised using higher order function 