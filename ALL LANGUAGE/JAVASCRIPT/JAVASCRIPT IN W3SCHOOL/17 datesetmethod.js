const a = new Date();
a.setFullYear(2021);
document.getElementById("setyear").innerHTML = a;

const b = new Date();
b.setFullYear(2021, 3,3);
document.getElementById("setdate").innerHTML = b;

const d = new Date();
d.setDate(13);
document.getElementById("setdate1").innerHTML = d;

const c = new Date();
c.setMonth(3);
document.getElementById("setmonth").innerHTML = c;
