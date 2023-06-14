const a = ["madhav","gediya"];
const a1 = [1,2,3,4,5,6];
const a2 = ["array 2",1,2,3,4,5,6];

document.getElementById("concat").innerHTML = a.concat(...a1,a2);
