let test = "This is madhav gediya";
let a = test.search("is");
document.getElementById("search").innerHTML = a + " -: Search is Case Sensitive";


let test1 = "This is madhav gediya";
let a1 = test1.search(/MADHAV/i);
document.getElementById("search-without-casesensitive").innerHTML = a1 + " -: Search without Case Sensitive";


let test2 = "Madhav gediya Study in BCA sem 5";
let a2 = test2.replace("Study in","first rank in");
document.getElementById("replace").innerHTML = a2 + " -: Replace is case sensitive";


let test3 = "Madhav gediya Study in BCA sem 5";
let a3 = test3.replace(/sTUDY IN/i,"first rank in");
document.getElementById("replace-without-sensitive").innerHTML = a3 + " -: Replace without case sensitive";
