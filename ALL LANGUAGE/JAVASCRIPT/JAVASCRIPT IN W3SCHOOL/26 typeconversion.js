document.getElementById("number").innerHTML = 
Number("3.14") +"<br>" +
Number(Math.PI) +"<br>" +
Number("    ") +"<br>" +
Number(true) +"<br>" +
Number(false) +"<br>" +
Number("3 9 0") +"<br>" +
typeof Number("madhav") +"<br>" ;

let y = "10";
let x = +y;
document.getElementById("unary").innerHTML = typeof y + "<br>" + typeof x;

let y1 = "10";
document.getElementById("string").innerHTML = 
"This is String() :- <br>"+ 
String(y1) + "<br>" + 
String(true) + "<br>" + 
String(false) + "<br>" + 
String(123) + "<br>" +
String(1+434+1) + "<br>"; 

let y2 = "10";
document.getElementById("tostring").innerHTML = 
"This is toString :- <br>"+ 
(y2).toString() + "<br>" + 
(true).toString() + "<br>" + 
(false).toString() + "<br>" + 
(123).toString() + "<br>" +
(1+434+1).toString() + "<br>"; 

