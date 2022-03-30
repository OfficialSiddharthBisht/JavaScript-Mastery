let arr = [1,2,3,4,5]
// To find the sum of all these elements

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum +=arr[i]
};
console.log(sum);

// Same can be done through reduce method as
// suppose we have to find the sum of all the numbers
const addition = arr.reduce((accumulator,current)=>{
    accumulator = accumulator + current;
    return accumulator;
},0)

console.log(addition);

arr = [5 , 2 , 9, 6]
//  To find the minimum element in teh array
const max = arr.reduce((acc, curr)=>{
    if(acc < curr){
        acc = curr;
    }
    return acc;
},Number.MIN_SAFE_INTEGER);
console.log(max);