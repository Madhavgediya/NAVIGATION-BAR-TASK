// const btn = document.querySelector(".btn");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("THIS IS CLICK");
// }

// const btn = document.querySelector(".btn");
// function btn1(){
//     console.log("best method");
// }
// //method addEventListener
// btn.addEventListener("click",btn1);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click",()=>{
//     console.log(this);
// });

// button multiple event fired

// const submitbtn = document.querySelector("#submit");
// submitbtn.addEventListener("click",function(){
//     console.log("User Clicked Submit....!");
//     console.log(submitbtn.textContent);
// })

const allButton = document.querySelectorAll(".my-button button");

// console.log(allButton);
// for(let button of allButton){
//     button.addEventListener("click", (e)=>{
//         console.log(e.target);
//     })
// }

for(let button of allButton){
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
    })
}

