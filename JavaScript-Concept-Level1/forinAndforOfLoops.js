// * For of loop is used for arrays to go to all the elements of the array
const faang = ["Facebook" , "Apple" , "Amazon" ,"Netflix" ,"Google"];

for(let val of faang){
    console.log(val);
}

// * For in loop is used for objects to go to each and every KVP , and it returns the key and we can access values easily by objName[key];
const symbols = {
    yt : "YouTube",
    ig : "Instagram",
    fb : "Facebook"
}

for(let val in symbols){
    console.log(val + " "+ symbols[val]);
}