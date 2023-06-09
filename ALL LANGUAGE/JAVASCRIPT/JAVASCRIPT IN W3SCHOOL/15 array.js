let a = [
    "madhav",
    "rajeshbhai",
    "gediya"
]

// document.write(a.length);

// for(let a1 of a){
//     document.write("<br>"+a1+" ");
// }


const person = {
    firstName : "madhav",
    lastName : "gediya",
    age : 19
};

document.getElementById("object-method").innerHTML = person.firstName;

// array with for loop

let a2 = [
    "for Loop",
    "madhav",
    "rajeshbhai",
    "gediya"
];
let fLen = a2.length;
let ul = "<ul>";

for(let i = 0; i<fLen; i++){
    ul += "<li>" + a2[i] + "</li>"; 
}

ul += "</ul>";

document.getElementById("for_loop").innerHTML = ul;


// array with for each 
let a3 = [
    "forEach",
    "madhav",
    "rajeshbhai",
    "gediya"
];
// let a3Len = a2.length;
let ul1 = "<ul>";

a3.forEach(myForEach);

ul1+= "</ul>";

document.getElementById("for_each_loop").innerHTML = ul1;

function myForEach(value){
    ul1 += "<li>" + value + "</li>";
}

