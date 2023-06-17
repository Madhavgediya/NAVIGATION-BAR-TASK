const a = [1,23,4,5,18];

document.getElementById("find").innerHTML = a.find(check);

function check(a){
    return a < 18;
}