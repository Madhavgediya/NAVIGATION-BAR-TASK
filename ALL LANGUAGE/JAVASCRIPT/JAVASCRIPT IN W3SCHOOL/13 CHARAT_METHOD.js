// charAt aa index number or thi character mele
var text = "HELLO WORLD !";
// document.write(text);
document.getElementById("m-charat").innerHTML = text.charAt(9);

// charCodeAt() aa index number pr je hoy teni ascii values aape

let text1 = "madhav";
document.getElementById("m-charCodeAt").innerHTML = text1.charCodeAt(1); 

let a = "a,b,c,d,e";
const myArray = a.split(",");
document.getElementById("m-split").innerHTML = myArray[1];
