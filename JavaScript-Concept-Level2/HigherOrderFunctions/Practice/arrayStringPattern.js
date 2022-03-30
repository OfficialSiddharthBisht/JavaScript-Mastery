/*Given an array of string generate an array whose first or last character is a

Sample Input - ["assignment", "problem", "media", "upload"]

Sample Output - ["assignment", "media"]
*/

const input = ["assignment" , "problem" , "media" , "upload"];

const output = input.filter(str=>(str[0] === 'a') || (str[str.length - 1] === 'a'));

console.log(output);