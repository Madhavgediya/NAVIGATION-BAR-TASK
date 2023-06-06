// get element by ID

// console.log(typeof document.getElementById("main-heading"));
// document.getElementById("main-heading");
// const mainheading = document.getElementById("main-heading");
// console.log(mainheading);

// queryselector 

// const mainheadingqueryselector = document.querySelector("#main-heading");

// console.log("this is querySelector with ID:- "+mainheadingqueryselector);

// const header = document.querySelector(".header");

// console.log(header);

// const formgroup = document.querySelectorAll(".form-group");

// console.log(formgroup);

// text property

// const text = document.getElementById("plan");

// console.log(text.textContent);

// text.textContent = "What is your plan?";
// console.log(text.textContent);

// Change Style ...!!

// const plan = document.getElementById("plan");
// console.log(plan.style);
// plan.style.color = "red";
// plan.style.backgroundColor = "yellow";
// plan.style.fontSize = "2rem";

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));

// link.setAttribute("href","#madhavHome");
// console.log(link.getAttribute("href").slice(1));

// const inputelement = document.querySelector(".form-todo input");

// console.log(inputelement.getAttribute("type"));


// document nodes 
// root -> child 
// const rootnode = document.getRootNode();
// const htmlelementnode = rootnode.childNodes[1];
// // console.log(rootnode.childNodes);
// console.log(htmlelementnode);

// const todolist = document.querySelector(".todo-list");
// console.log(todolist.innerHTML);

// todolist.innerHTML = todolist.innerHTML + "<li> New TODO </li>";
// todolist.innerHTML += "<li> New TODO </li>";

// const todolist = document.querySelector('.todo-list');

// console.log(todolist);
// todolist.append('TODO 2');
// todolist.prepend('TODO 0');
// todolist.remove();


// const newTodo = document.createElement("li");
// const newTodotext = document.createTextNode("madhav todo");
// const todolist = document.querySelector('.todo-list');


// console.log(newTodo);
// newTodo.append(newTodotext);
// todolist.append(newTodo);


// const todolist = document.querySelector(".todo-list");
// todolist.insertAdjacentHTML("beforeend","<h1> madhav gediya </h1>");

// clone nodes

// const todolist = document.querySelector(".todo-list");
// const todolistli = document.createElement("li");

// todolistli.textContent = " this is new";
// const todolistli2 = todolistli.cloneNode(true);
// todolist.append(todolistli);
// todolist.prepend(todolistli2);    

// appendChild()
// insertBefore()
// replaceChild()
// removeChild()

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");

// li.textContent = "new todo";
// ul.append(li);



// static list vs live list

// const listItem = document.querySelectorAll(".todo-list li");
// // console.log(listItem);
// const ul = document.querySelector(".todo-list");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";
// ul.append(sixthli);

// Events .

const button = document.querySelector('.btn-headline');

// console.log(button);
// button.onclick = (()=>{
//     console.log("Clicked SuccessFullyy..!");
// })

// button.addEventListener("click", function(){
//     console.log("AddEventlistener Clicked...!");
// })

// button.addEventListener("click", ()=> {
//     console.log("Arrow With Clicked...!");
// })

