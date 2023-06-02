const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
todoForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li"); 
    todoInput.value = ""; // clear karva mate....
});


// const btn = document.querySelector(".btn-headline");

// first method 
// btn.onclick = function(){
//     console.log("CLICKED EVENT....!!");
// }

// second addEventListener()  
// function clickme(){
//     console.log("You Cliked by addEventListener()");   
// }
// btn.addEventListener("click",clickme);

// btn.addEventListener("click",()=>{
//     console.log("Arrow with...!");
// });