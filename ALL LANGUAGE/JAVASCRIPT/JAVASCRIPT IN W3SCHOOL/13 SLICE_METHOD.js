function myFunctionSlice(){
let text = "madhav, rajeshbhai, gediya";
let part = text.slice(8,18);
// slice ( [string start index number] , [string end index number] )
document.getElementById("m-slice").innerText = part;
}