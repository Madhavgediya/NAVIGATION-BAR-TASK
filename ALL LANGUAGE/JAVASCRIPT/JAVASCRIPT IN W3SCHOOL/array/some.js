let age = [12,11,18];

document.getElementById("some").innerHTML = age.some(check);

function check(age){
    return age  > 18;
}
