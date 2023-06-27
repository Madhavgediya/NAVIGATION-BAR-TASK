let a = [1,2,3,4,5,6];
a.unshift(7);   // add element
a[2] = a.shift();  // remove element
document.getElementById("shift").innerHTML = a;