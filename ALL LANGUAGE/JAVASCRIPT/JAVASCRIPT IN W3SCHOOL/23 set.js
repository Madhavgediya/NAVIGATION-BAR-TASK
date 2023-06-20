// const a = new Set(["a","b","c"]);


// a.add("d");
// document.getElementById("set").innerHTML = a.size;

// forEach thi value print thay

// const a = new Set(["a","b","c"]);

// let text = "";
// a.forEach(function(value){
//     text += value + "<br>";
// })

// document.getElementById("set").innerHTML = text;

const a = new Set(["a","b","c"]);

let text = "";
for(const x of a.values()){
    text += x + "<br>";
}

document.getElementById("set").innerHTML = text;

