function myFunctionSubstr(){

let text = "madhav, rajeshbhai, gediya";
let part = text.substr(0,3);
// slice ( [string start index number] , [string length] )
document.getElementById("m-substr").innerText = part;
}