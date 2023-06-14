const a = [1,23,4,5,18];

document.getElementById("findindex").innerHTML = a.findIndex(check);

function check(a){
    return a > 18;
}