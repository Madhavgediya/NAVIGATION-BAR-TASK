// javascript most used full 

// map();

const numbers = [100,200,300];
const doubles = numbers.map(numbers => numbers * 2);
document.getElementById("map_method").innerHTML = "This is Map(). <br> <code> numbers.map(numbers => numbers * 2)</code><br>"+doubles;



// const number_filter = [1,2,3,234,36,4,,57,578,6,2324,8];
// let answer_filter = number_filter.filter(n => n <= 100);

function myFun(){
    if(document.getElementById("checkAge").value > 18){
        return "You are not Eligiable";
    }
}

