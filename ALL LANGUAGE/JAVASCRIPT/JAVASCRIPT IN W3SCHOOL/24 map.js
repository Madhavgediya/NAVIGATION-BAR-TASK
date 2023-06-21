const a = new Map([
    ["apple", 500],
    ["apple1", 300],
    ["apple2", 2500]
]);

a.set("apple3", 1200);
// a.delete("apple")
// document.getElementById("map").innerHTML = a.size;

// let text = "" ;
// a.forEach(function(value,key){
//     text += key + '=' + value + "<br>";
// })
// document.getElementById("map").innerHTML = text;


let text = "" ;
for(const x of a.entries()){
    text += x + "<br>";
}
document.getElementById("map").innerHTML = text;