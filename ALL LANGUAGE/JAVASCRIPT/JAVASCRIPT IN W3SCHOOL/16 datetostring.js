//defult petten 
const a = new Date();
document.getElementById("datestring").innerHTML = a;

// toString pettan
const b = new Date("04-03-2004");
document.getElementById("datestring1").innerHTML = b.toString();

// toDateString()
const c = new Date(2023, 6 ,16 , 20, 21, 0 );
document.getElementById("datestring2").innerHTML = c.toDateString();

// toUTCString()
const d = new Date(2023, 6 ,16 , 20, 21, 0 );
document.getElementById("datestring3").innerHTML = d.toUTCString();


// toUTCString()
const e = new Date(2023, 6 ,16 , 20, 21, 0 );
document.getElementById("datestring4").innerHTML = e.toISOString();