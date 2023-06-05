// event bubbling |  capturing | delegation 

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const  body = document.querySelector("body");

// event bubbling / event propogetion

// child.addEventListener("click",()=>{
//     console.log("this is child");
// })

// parent.addEventListener("click",()=>{
//     console.log("this is perent");
// })

// grandparent.addEventListener("click",()=>{
//     console.log("this is grandperent");
// })

// body.addEventListener("click",()=>{
//     console.log("this is body");
// })

// capture event
    // child.addEventListener("click",()=>{
    //     console.log("this is child");
    // },true
    // )

    // parent.addEventListener("click",()=>{
    //     console.log("this is perent");
    // },true
    // )

    // grandparent.addEventListener("click",()=>{
    //     console.log("this is grandperent");
    // },true
    // )

    // body.addEventListener("click",()=>{
    //     console.log("this is body");
    // },true
    // )

    body.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
    })