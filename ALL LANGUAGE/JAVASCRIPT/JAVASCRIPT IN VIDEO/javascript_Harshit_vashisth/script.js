
// Array...
// let myArray1 = [1, "madhav", 3, 4, 5];
// let myArray2 = myArray1;

// console.log(myArray1.push("gediya"));
// console.log(myArray1);
// console.log(myArray2);

// for loop

// let arr = ["madhav","parth","vishesh","niraj","rishi","jenish"];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[arr.length-1]);

// for(let a=0; a < arr.length; a++){
//     console.log(arr[a].toUpperCase());
// }


// while loop
// let a = 0;
// while(a < arr.length){
//     console.log(arr[a]);
//     a++;
// }

// object 

// const person = {name : "madhav gediya",
//                 age : 19,
//                 "person hobbies" : ["read", "write","new creativity"]    };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["person hobbies"]);

// person.gender = "male";
// console.log(person);

// computed properties

// const key1 = "object1";
// const key2 = "object2";

// const value1 = "obj value 1";
// const value2 = "obj valeu 2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);
// console.log(obj[key1]);
// console.log(obj[key2]);

// object inside array

// let users = [
//     {
//         userid : 1,
//         firstname: "madhav",
//         lastname : "gediya"
//     },
//     {
//         userid : 2,
//         firstname: "madhav2",
//         lastname : "gediya2"
//     },
//     {
//         userid : 3,
//         firstname: "madhav3",
//         lastname : "gediya2"
//     }
// ]

// console.log(users);
// for(let user of users)
// {
//     console.log(user);  
// }



// function

// function song() {
//     console.log("Hello Hii Hello Hii,,,,,,");
// }



// song(); // Calling Function.....



// arrow Function 

// const iseven = (number) => {
//     return number*number;
// }

// console.log("Arrow Function",iseven(5));


// Nested Function 

// const app = () =>{
//     const myfun = () =>{
//         console.log("HELLO MY FUNCTION");
//     }

//     const myfunadd = (num, num1) =>{
//         console.log("HELLO MY ADD FUNCTION",num," ",num1);
//     }

//     const myfundel = (number1, number2) =>{
//         console.log("HELLO MY DELETE FUNCTION",number1," ",number2);
//     }  
//     // myfun();
//     // myfunadd(2,5);
//     // myfundel(2,5);
// }

// console.log(app(2,5));


//defualt parameter

// function addtwo(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }

// const ans = addtwo(2);
// console.log(ans); 

// rest perameter

// function myfun(...c) {
//     // console.log(c);
//     let total = 0;
//     for (let c1 of c) {
//         total = total + c1;
//     }
//     return total;
// }

// const ans = myfun(1, 2, 3, 4, 5);
// console.log(ans);

// callback function

// function one(a){
//     console.log("this is function one.............1");
//     // a
// }

// function two(){
//     console.log("this is function Two.............2");
// }

// one(two());

// Function return Function

// function a(){
//         function b(){
//             console.log("THIS IS B");
//         }
//         return "this is a";
// }


// const ans = a();
// console.log(ans);
// const arr = [1, 2, 3, 4, 5];
// function number(number1, Index) {
//     console.log("Index No. is :- ", Index);
//     console.log(`${number1}*5= ${number1 * 5}`);
// }

// arr.forEach(number);
// for (let i = 0; i < arr.length; i++) {
//     // console.log("index is :- ", i);
//    number(arr[i],i);
// }

//map this is method

// const number = [3,4,5,2,1];

// const square = function(numbers){
//     return numbers * numbers;
// }
// const sqnumber = number.map(square);
// console.log(sqnumber);

// const users = [
//     {firstName: "madhav", age: 19},
//     {firstName: "gediya", age: 9},
//     {firstName: "rajeshbahi", age: 53},
//     {firstName: "vallabhdas", age: 85},
// ]

// const username = users.map((user)=>{
//     return user.firstName;
// });

// console.log(username);

// filter Method

// const num = [1,2,3,4,5,6,7,8,9,10];

// const even= function(number){
//     if(number%2 !== 0){
//         function even1(){
//             console.log("all are even :- ",number);
//         }
//         even1();
//     }
//     else{
//         function odd(){
//             console.log("all are odd :- ",number);
//         }
//         odd();
//     }
//     // return ;
// }

// const evenNumber = num.filter(even);
// console.log(evenNumber); 


// reduce 

// const arr =  [1,2,3,4,5];

// const arrans = arr.reduce((first,seconde)=>{
//     return first + seconde;
// });
// console.log(arrans);

// const item = [
//     {code : 1, itemname: "Mobile", itemprice:10000},
//     {code : 2, itemname: "laptop", itemprice:50000},
//     {code : 3, itemname: "desktop", itemprice:40000},
//     {code : 4, itemname: "laptop", itemprice:50000},
//     {code : 5, itemname: "desktop", itemprice:10000},
// ]

// const total = item.reduce((totalitem, totalvalue)=>{
//     return totalitem + totalvalue.itemprice;
// },0);

// console.log(total);


//sort method 

// const number = [100,400,300,103,80];
// number.sort();
// console.log(number);

// number.sort((a,b)=>{
//     return a-b; //Short method number.sort((a,b)=>a-b);
// });
// console.log(number);

// const product = [
//     { item_code: 1, item_name: "m1", item_price: 10000 },
//     { item_code: 2, item_name: "m2", item_price: 90000 },
//     { item_code: 3, item_name: "m3", item_price: 20000 }
// ]

// // price low to high sort

// const lowtohigh = product.slice(0).sort((a, b) => {
//     return a.item_price - b.item_price;
// });
// console.log(lowtohigh);

// // high to low 

// const hightolow = product.slice(0).sort((a, b) => {
//     return b.item_price-a.item_price ;
// });
// console.log(hightolow);

// find method 

// const product = [
//     { item_code: 1, item_name: "m1", item_price: 10000 },
//     { item_code: 2, item_name: "m2", item_price: 90000 },
//     { item_code: 3, item_name: "m3", item_price: 20000 }
// ]

// const myitem = product.find((pro)=>{
//     return pro.item_code===2;
// });

// console.log(myitem);

// every()
// const product = [
//     { item_code: 1, item_name: "m1", item_price: 10000 },
//     { item_code: 2, item_name: "m2", item_price: 90000 },
//     { item_code: 3, item_name: "m3", item_price: 20000 }
// ]

// const a = product.every((itemcart)=>itemcart.price < 90000);

// console.log(a);

// some method  
// const madhav = [2,32,1];

// const ans = madhav.some((madhavnumber)=> madhavnumber%2===1);
// console.log(ans);

// const cart = [
//     {
//         productId: 1, productName: "mobile", price:12000 
//     },
//     {
//         productId: 2, productName: "laptop", price:20000 
//     },
//     {
//         productId: 3, productName: "tv", price:120000 
//     }

// ]

// const ans = cart.some((cartitem)=>cartitem.price >100000);
// console.log(ans);


//fill method use for change array

// const arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr);
// arr.fill(0,1,5);
// console.log(arr);

//splice()
//start delete insert

// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// arr.splice(0,5);    // Delete elements arr,splice(starting index, delete item in nummber, insert element)

// console.log(arr);

// iterables and array like object
// this is example of iterables
// array and string are iterables.
// const madhav = [1,2,3,4,5,"madhav","gediya"];
// for(let char of madhav){
//     console.log(char);
// }

// const a = {
//     'key1' : 'madhav',
//     'key2' : 'madhav1'
// }
// for(let char of a){
//     console.log(char);
// }

// set method

// const arr = [11,22,33,44,55,66,77,88,99,1100];
// const uniq = new Set([1,2,3,4,5,6,"madhav"]);
// uniq.add("gediya"); // add your element in set
// // console.log(uniq.has("madhav")); // Search your elements
// console.log(uniq);
// uniq.add(arr);
// console.log(uniq);


// map object 

// const map1 = new Map();
// map1.set('k1','madhav');
// map1.set('k2','madhav gediya');
// map1.set(1,'madhav1');

// console.log(typeof map1.keys(1));
// console.log(typeof map1.get('k1'));

// // for(let key of map1.keys()){
// //     console.log(key, typeof key);
// // }

// for(let key of map1){
//         console.log(Array.isArray(key));
//         }


// this is map object

// const p1 = {
//     id : 1,
//     name1:"madhav"
// }


// const ext = new Map();
// ext.set(p1, {age:19, sex:"male"});
// console.log(p1.id,p1.name1);
// console.log(ext.get(p1).age);
// console.log(ext.get(p1).sex);

// //Cloning

// const obj = {
//     name : "madhav",
//     age : 19
// };

// const obj1 = {...obj};
// obj.key1= "value1";

// if(obj===obj1)
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
// console.log("this is only obj1",obj1);
// console.log("this is only obj",obj);

// optional chaining

// const obj = {
//     name1 :"madhav",
//     address : "junagadh"
// }

// console.log(obj.name1);
// console.log(obj.address);

//method 
// "this" --> keyword use  

// function fullbio(bike, frd){
//     console.log(`Hello Friends I am "${this.user}", I am "${this.age}" year's old. I am study in "${this.collage}". I am going to collage in "${bike}". with my friend "${frd}". Thank you for visit by Bio.......!`);
// }

// const obj = {
//     user : "madhav",
//     age : 19,
//     collage : "S.S.S.D.I.I.T JND",
// }

// const obj1 = {
//     user : "parth",
//     age : 23,
//     collage : "NOBEL JND",
// }

// obj.all();


// function call apply bind method.


// first object ni method seconde object ma use karva mate .call no use thai che.... 
// console.log("THIS IS FUNCTION CALL METHOD");
// fullbio.call(obj,"bike","parth");
// fullbio.call(obj1,"car","madhav");


// //apply
// // apply ma array pass thai
// console.log("THIS IS FUNCTION APPLY METHOD");
// fullbio.apply(obj, ["auto","niraj"]);
// fullbio.apply(obj1, ["bus","nevil"]);

// // bind
// // function return kare tethi object ma store karvo pade.
// console.log("THIS IS FUNCTION BIND METHOD");

// const obj_obj =  fullbio.bind(obj,"auto","niraj");
// obj_obj();

// const obj1_obj1 =  fullbio.bind(obj1,"auto","bhamu");
// obj1_obj1();


// normal object
// const user1 = {
//     firstname : "madhav",
//     lastname : "gediya",
//     email : "madhavgediya@gmail.com",
//     age : 2,
//     address :"junagadh",
//     about: function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// make function
// work 1) create object 2) key value pair and 3) give return
// const usermethod = {
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createuser(firstname, lastname, email,age,address){
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = usermethod.about;
//     user.is18 = usermethod.is18;
//     return user;
// }

// const user1 = createuser('madhav','gedia','madhav@gmail.com',18,'junagadh');
// console.log(user1.about());
// console.log(user1.is18());

// const obj ={
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj1 =  Object.create(obj);

// obj1.key3 = "value3";

// // {
// // }

// console.log(obj1.__proto__);

// function Hello(){
//     console.log("Hello world...!");
// }

// Hello();
// console.log(Hello.name);

// prototype:-

// function createuser(firstname,lastname,email,age,address){
//     const user = Object.create(createuser.prototype);
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createuser.prototype.about = function(){
//     return `${this.firstname} is ${this.age} years old.`;
// };
// createuser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// createuser.prototype.song = function(){
//     return "lalala lalal lallal allla";
// };

// const user1 = createuser('madhav','gediya','madhav@gmail.com',19,'junagadh');

// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.song());


// new keyword

// function createuser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createuser.prototype.about= function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }

// const user = new createuser('madhav',19);
// console.log(user);
// // console.log(user.about());

// for(let key in user){
//     // c onsole.log(key);
//     if(user.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// class in javascript

// class createuser{
//     constructor(firstname, lastname, email, age, address){
//     console.log("called....!");
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     }

//     about(){
//         console.log("this is about");
//     }

//     is18(){
//         return this.age >= 18;
//     }
// }

// const user1 = new createuser('madhav','gedia','madha@gmail.com',19,'junagadh');

// console.log(user1.firstname);
// console.log(user1.lastname);
// console.log(user1.email);
// console.log(user1.age);
// console.log(user1.address);
// user1.about();
// console.log(user1.is18());


// class madhav{
//     constructor(username, password, email, number)
//     {
//         console.log("Call Automatically....! ");
//         this.username = username;
//         this.password = password;
//         this.email = email;
//         this.number = number;
//     }
//     all_details()
//     {
//         return `${this.username} Hii, this is your password ${this.password}, this is your email id ${this.email}, this is your mobile number :- ${this.number}`;
//     }
// }

// const user1 = new madhav("madhav gediya","madhav#123","madhav@gmail.com",09209202000);
// console.log(user1.all_details());

// class animal{
//     constructor(animalname, animalage){
//         this.animalname = animalname;
//         this.animalage = animalage;
//     }

//     eat(){
//         return `this is ${this.animalname}. it is ${this.animalage} year's old.`;
//     }
// }

// const animal1 = new animal("cow",6);
// console.log(animal1);
// console.log(animal1.eat());

// class dog extends animal{
//     constructor(animalname, animalage, animalspeed){
//         super(animalname, animalage);
//         this.animalspeed = animalspeed;
//     }
//     run(){
//         return  `this is ${this.animalname}. it is ${this.animalage} year's old. and ${this.animalname} speed is ${this.animalspeed} kmph`;
//     }
// }

// const tommy = new dog("tommy",2,10);
// console.log(tommy);
// console.log(tommy.run());

// getter setter 

// class person{
//     constructor(firstname, lastname, age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     fullname(){
//         return `${this.firstname} ${this.lastname} this age is ${this.age}`;
//     }
// }

// console.log(person.fullname());
// const person1 = new person("madhav","gediya",19);
// console.log(person1.fullname());

// java script part two    
// Harshit vashisth     


