/* Given the radius of circles in the form of array , find the following seperately :-
? 1 - Diameter
? 2 - Circumference
? 3 - Area
*/

let radiusArr = [2 ,3, 4, 5];

let diameter = (radiusArr)=>{
    let ans = [];
    for(let i = 0; i < radiusArr.length; i++){
        ans.push(2 * radiusArr[i]);
    }
    return ans;
}
let circumference = (radiusArr) =>{
    let ans = [];
    for(let i = 0; i < radiusArr.length; i++){
        ans.push(2 * Math.PI * radiusArr[i]);
    }
    return ans;
}
let area = (radiusArr) =>{
    let ans = [];
    for(let i = 0; i < radiusArr.length; i++){
        ans.push(Math.PI * radiusArr[i] * radiusArr[i]);
    }
    return ans;
}
console.log(diameter(radiusArr));
console.log(circumference(radiusArr));
console.log(area(radiusArr));

// ! We achieved our goal but DRY principle is violated we are repeating our code again and again . This can be optimised using higher order function 