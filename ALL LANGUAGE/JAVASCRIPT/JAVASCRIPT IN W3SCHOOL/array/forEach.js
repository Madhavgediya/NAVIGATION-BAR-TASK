let text = "";
const fruits  = ["apple","orange","cherry"];
fruits.forEach(myFun);

document.getElementById("foreach").innerHTML = text;

function myFun(item, index){
    text += index + ": " + item + "<br>";
}


let sum = 0;
let num = [30,90,20,110," madhav"," gediya"];
num.forEach(myFun1);
document.getElementById("foreach").innerHTML = sum;

function myFun1(item){
    sum += item;
}
