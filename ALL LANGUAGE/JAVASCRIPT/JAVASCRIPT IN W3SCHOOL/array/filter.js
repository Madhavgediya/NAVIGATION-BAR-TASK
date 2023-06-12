// const age = [19,16,50,45,34];
// document.getElementById("filter").innerHTML = age.filter(myFun);

// function myFun(age){
//     return age >=18;
// }


// const name1 = ["madhav", "mihir", "ravi", "akasha","megha","mihir","mihir"];
// document.getElementById("filter").innerHTML = name1.filter(myFun);

// function myFun(name1){
//     return name1==="mihir";
// }

// const name2 = ["madhav", "mihir", "ravi", "akasha","megha","mihir","mihir"];
// document.getElementById("filter").innerHTML = name2.filter((name2)=>{
//     return name2==="mihir"
// });


const age = [35, 90, 3,23, 43];

function checkAge(age){
    return age > document.getElementById("ageToCheck").value;
}

function myfunction(){
    document.getElementById("filter").innerHTML =age.filter(checkAge);
}