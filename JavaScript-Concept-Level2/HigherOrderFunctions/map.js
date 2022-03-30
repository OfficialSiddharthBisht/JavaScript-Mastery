const arr = [1 , 2 , 3, 4 , 5];
//  Given an array arr return the double of that array

let double = [];
for(let i = 0; i < arr.length; i++){
    double.push(arr[i] * 2);
}
console.log(double);

//  same can be done using maps like
//  eg to triple an element
let triple = arr.map((x)=> 3 * x);
console.log(triple);
