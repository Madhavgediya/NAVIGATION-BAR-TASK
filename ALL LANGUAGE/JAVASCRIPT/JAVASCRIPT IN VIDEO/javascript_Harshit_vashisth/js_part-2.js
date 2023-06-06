// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "madhav";
// console.log(firstName);



//closures

// function print(firstName, lastname){
//         function nameprint(){
//             console.log(firstName, lastname);
//         }
//         return nameprint;
// }

// const ans =  print("madhav","gediya");

// ans();

// function myfunc(power){
//     return function(number){
//         return number ** power
//     }
// }

// const square = myfunc(2);
// const ans = square(3);
// console.log(ans);

// const cube = myfunc(3);
// const ans2 = cube(3);
// console.log(ans2);

// make new 

function func(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hi Are You call me >>???");
            count++;
        }
        else{
            console.log("kem bhai sadi kare,,,,,");
        }
    }
}

const myfun = func();
myfun();    
myfun();    