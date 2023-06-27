// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const per = new Person("madhav gediya", 19);

// document.getElementById("class").innerHTML = per.name + " Age is " + per.age;


// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let car1 = new Car("Rolls Royce", 2021);
// document.getElementById("class1").innerHTML = car1.name + " is " + car1.age() + " Year's Old...!";

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

let car1 = new Car("Rolls Royce", 2021);
document.getElementById("class2").innerHTML = car1.name + " is " + car1.age(year) + " Year's Old...!";
