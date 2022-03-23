// * The slice function just takes some part of the array start inclusive end exclusive and return it. End to the end of the array by default
let names = ["A" , "B" , "C" , "D" , "E"];
let newArr = names.slice(1 , 3);
console.log(newArr);


//  ? The splice function remove the element in the range of indexes i.e 1st 2 argument and add the third and all later arguments
names.splice(1 ,3 ,"Z", "X");
console.log(names);