let text = "1";
text1 = text.padStart(5,0);
text2 = text.padEnd(5,"0");

document.getElementById("m-padstart").innerHTML = text1;
document.getElementById("m-padend").innerHTML = text2;