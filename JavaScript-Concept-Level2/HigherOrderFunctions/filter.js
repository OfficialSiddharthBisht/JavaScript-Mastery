const arr = [1 ,2 ,3, 4,5];
//  Given an aray filter out all the even numbers
let evenArr = [];
for(let i = 0; i < arr.length; i ++){
    if(arr[i] % 2 === 0){
        evenArr.push(arr[i]);
    }
}
console.log(evenArr);

// Same can be done using filter method as
// Suppose we have to filter the odd out 

let oddArr = arr.filter((x)=>x % 2 === 1);
console.log(oddArr);