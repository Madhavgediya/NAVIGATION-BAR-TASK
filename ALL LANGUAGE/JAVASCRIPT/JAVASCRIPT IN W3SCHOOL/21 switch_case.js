// let day = new Date().getDay();
// let element = document.getElementsByClassName("switch-case")[0];

// switch(day){
//     case 0 : 
//     day = "SunDay";
//     break;

//     case 1 : 
//     day = "MonDay";
//     break;

//     case 2 : 
//     day = "TuesDay";
//     break;

//     case 3 : 
//     day = "WednesDay";
//     break;

//     case 4 : 
//     day = "ThursDay";
//     break;

//     case 5 : 
//     day = "FriDay";
//     break;

//     case 6 : 
//     day = "SaturDay";
//     break;
  
//     default: 
//     day = "Aap es duniya ke nahi he.....!";
//     break;

// }

// document.getElementsByClassName("switch-case")[0].innerHTML ="Aaaje aa Day che :-------- " + day;

let day = new Date().getDay();
let element = document.getElementsByClassName("switch-case")[0];

switch(day){
    case 1 : 
    case 2 : 
    case 3 : 
    case 4 : 
    case 5 : 
    day = "bhai aaje work karvu pade";
    break;
    
    // day = "MonDay";
    // break;
    
    // day = "TuesDay";
    // break;
    
    // day = "WednesDay";
    // break;
    
    // day = "ThursDay";
    // break;
    
    // day = "FriDay";
    // break;
    
    case 0 : 
    case 6 : 
    day = "SaturDay & SunDay Moj karo....! You are free...!";
    break;
    
    default: 
    day = "Aap es duniya ke nahi he.....!";
    break;

}

document.getElementsByClassName("switch-case")[0].innerHTML ="Aaaje aa Day che :-------- " + day;
