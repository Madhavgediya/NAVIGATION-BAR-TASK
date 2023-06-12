const num = [4,9,16,25];
document.getElementById("map").innerHTML = num.map(Math.sqrt);


const num1 = [1,2,3,4,5];
const newArr = num1.map(myFunction);

document.getElementById("map-fun").innerHTML = newArr;

function myFunction(num1){
    return num1 * num1;
}

const obj = [
    {
    firstName : "madhav" , lastName : "gediya"
    },
    {
    firstName : "madhav1" , lastName : "gediya1"
    },
    {
    firstName : "madhav2" , lastName : "gediya2"
    }
];

document.getElementById("map-fun-ex").innerHTML = obj.map(mathfun);

function mathfun(item){
    return [item.firstName, item.lastName]. join("  ");
}
