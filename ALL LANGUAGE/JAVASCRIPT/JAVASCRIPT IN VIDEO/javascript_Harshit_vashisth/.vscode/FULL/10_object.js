const a = {
    user_name : "madhav gediya",
    user_age : 19, 
    "user password" : "102910"
}

console.log(a);
console.log(a.user_name);
console.log(a.user_age);
console.log(a["user password"]);

// add in object property
a.gender = "male";
console.log(a.gender);


// computed property

const key1 = "user_address";
const key2 = "user_city";

const value1 = "kalva chowk";
const value2 = "junagadh";

a[key1] = value1;
a[key2] = value2;
console.log(a);

// Object inside array....!

let user = [
    {
        userId : 1,
        userName : "madhav",
        userAge : 19
    },
    {
        userId : 2,
        userName : "parth",
        userAge : 20
    },
    {
        userId : 3,
        userName : "gediya",
        userAge : 200
    },
];

console.log(user);
// console.log(user[1].userId);
// console.log(user[1].userName);
// console.log(user[1].userAge);

for(let usernew of user){
    console.log("    ");
    console.log(usernew.userId);
    console.log(usernew.userName);
    console.log(usernew.userAge);
}

