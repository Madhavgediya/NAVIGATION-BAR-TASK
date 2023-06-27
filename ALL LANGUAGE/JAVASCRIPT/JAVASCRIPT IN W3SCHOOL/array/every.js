let a = [10,10,11,10];

document.getElementById("every").innerHTML = a.every(check);

function check(a)
{
    return a >= 9;
}