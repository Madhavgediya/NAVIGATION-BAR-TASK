let text = "Please locate Where 'locate' occurs ! ";

let index = text.indexOf("locate");
document.getElementById("m-indexof").innerHTML = index; 

let text1 = "Please locate Where 'locate' occurs ! ";

let index1 = text1.lastIndexOf("locate");
document.getElementById("m-lastindexof").innerHTML = index1; 

let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.search("locate");

document.getElementById("m-search").innerHTML = index2;

let text3 = "madhav gediya ";
const myArr = text3.match("d");
document.getElementById("m-match").innerHTML = myArr.length + " " + myArr;

let text4 = "madhav gediya";
const myArr1 = text4.matchAll("a");
document.getElementById("m-matchAll").innerHTML = Array.from(myArr1);

let text5 = "madhav gediya";
// document.write(text5);
const index5 = text5.includes("madhav");
document.getElementById("m-include").innerHTML = index5;

let text6 = "madhav gediya ";
// document.write(text5);
const index6 = text6.startsWith("d",9);
document.getElementById("m-startwith").innerHTML = index6;

let text7 = "madhav gediya ";
// document.write(text5);
const index7 = text7.endsWith("gediya");
document.getElementById("m-endwith").innerHTML = index7;
