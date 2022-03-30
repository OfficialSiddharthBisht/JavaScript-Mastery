/*
Given an array of string generate an array with their first characters

Sample Input - ["Siddharth", "Bisht"]

Sample Output - ["M", "S"]
*/
const input = ["Siddharth" , "Bisht"];

const output = input.reduce((acc , curr)=>{
    acc.push(curr[0])
    return acc;
},[]);

console.log(output);