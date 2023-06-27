// const arr = ["a","w","d","v","b","c"];
const arr = [1,3,5,6,7,8,2,4,10];

// this is ascending order
arr.sort((a,b)=>{
    return a-b;
});             
document.getElementById("sort").innerHTML = arr[0];

// this is descending order
// arr.sort((a,b)=>{
//     return b-a;
// });             
// document.getElementById("sort").innerHTML = arr[0];