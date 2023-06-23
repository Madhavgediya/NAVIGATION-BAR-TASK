// let myFun = (a,b) => a * b;
// document.getElementById("arrow").innerHTML = myFun(10,10)

// let myFun = () =>{
//     return "madhav gediya";
// };
// document.getElementById("arrow").innerHTML = myFun()

let addMore = "";
addMore = function(){
    document.getElementById("add").innerHTML += "<div style='display:inline-block;'> <textarea placeholder='Enter Text'  style='background:black; color:white; width:150px; height:150px;'> </textarea><br> <button type='submit'> Edit </button> <button type='reset'> Remove </button>  </div>   "
}

this.addEventListener("load", addMore);

document.getElementById("btn").addEventListener("click", addMore);