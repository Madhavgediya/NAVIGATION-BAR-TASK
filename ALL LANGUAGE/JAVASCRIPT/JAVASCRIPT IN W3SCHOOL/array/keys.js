const a = ["madhav","gediya","rajeshbhai","apple","banana"];

let keys = Object.keys(a);

let text = "";
for(let i of keys){
    text += i + "<br>";
}

document.getElementById("keys").innerHTML = text;