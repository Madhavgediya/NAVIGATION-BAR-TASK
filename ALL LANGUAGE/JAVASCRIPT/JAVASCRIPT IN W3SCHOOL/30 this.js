const person = {
    uname : "madhav",
    lname : "gediya",
    age : 19,
    city : "junagadh",
    fullName : function(){
        return this.uname + " " + this.lname;
    }
}
document.getElementById("this").innerHTML = person.fullName();

// let a = this;
// document.getElementById("window-this").innerHTML = a;

"use strict";
let a1 = this;
document.getElementById("window-this").innerHTML = a1;


const this1 = {
    fullName : function(){
        return this.fName + " " + this.lName;
    }
}

const this2 = {
    fName : "madhav",
    lName : "gediya"
}

document.getElementById("first-to-second-this").innerHTML = this1.fullName.call(this2);