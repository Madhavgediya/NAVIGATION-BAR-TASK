// console.log("THIS IS CLASS FILE");

// class item{
//     constructor(name,price,code,discount)
//     {
//         this.name = name;
//         this.price = price;
//         this.code = code; 
//         this.discount = discount;
//     }

//     get getvalues(){
//         return this.discount;
//     }
//     set setvalues(value){
//         this.discount = value;
//     }
// }
// let book = new item("bhagvat gita", 150, "bg01",50);

// console.log("this is your item name :- "+book.name);
// console.log("this is your item price :- "+book.price);
// console.log("this is your item code :- "+book.code);
// console.log("this is your item discount :- "+book.discount);
// console.log("this is your item final price :- "+(book.price-book.discount));
// console.log("THANK YOU FOR BUY THIS WONDERFULL BOOK");

// console.log('    ');
// console.log('THIS IS SET '+item.setvalues(10));
// console.log('THIS IS GET '+item.getvalues());




// var a = "madhav gediya";
// var b =100;
// var c = 123.25689;
// var d = true;
// var e = false;

// console.log(typeof a +" "+ a);
// console.log(typeof b +" "+ b);
// console.log(typeof c +" "+ c);
// console.log(typeof d +" "+ d);
// console.log(typeof e +" "+ e);

// let nam = document.querySelector('button');
// nam.addEventListener('click',showMsg);

// let udp = document.getElementById('btn2');
// udp.addEventListener('click',updmsg);

// function updmsg()
// {
//     let msg = prompt('ENTER NAME FOR UPDATE :-');
//     udp.textContent = 'Roll No - 1  '  + msg;
// }

// function showMsg()
// {
//     alert("first word...!");
// }

// var a2 = 190;
// var a3 = 200;
// console.log(a2 + a3);
// console.log(a2++);
// console.log('A2 = ' +a2 + ' Total ' +(a2 %a3));

// console.log((a2+a2) < a3);



// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];

// for(let i = 0; i<b.length; i++){
//     console.log(b[i]);
// }
// // const  c = a.concat(b)
// const c = [...a, ...b,11,12]
// // c.push(11,12);
// console.log(c)

// function mai(a,b=10){
//     return a*b;
// }

// let m = mai(10);

// console.log(m);


// const arr = [ 1,2,3,4,5
    // {
    //     id : 1, name : 'option1', value : 1
    // },
    // {
    //     id : 2, name : 'option1', value : 2
    // }
// ]

// arr.push("madhav");
// arr.splice(0,0,"madhav2");

// console.log(arr);


// for of => array 
// for in => object 


const any=[
        name1 = "jksdfk",
        age = 19
    ]
 let text = " ";
for(let x of any){
    text += x + " ";
}

console.log(text);