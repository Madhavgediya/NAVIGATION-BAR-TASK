let text1 = "       MADHAV       ";
let text2 = text1.trim();
let text3 = text1.trimStart();
let text4 = text1.trimEnd();

document.getElementById("m-trim").innerHTML = "Length TEXT 1 = " + text1.length + "<br> Length TEXT 2 = " + text2.length ; 
document.getElementById("m-trimStart").innerHTML = "Length TEXT 1 = " + text1.length + "<br> Length TEXT 3 = " + text3.length ; 
document.getElementById("m-trimEnd").innerHTML = "Length TEXT 1 = " + text1.length + "<br> Length TEXT 4 = " + text4.length ; 