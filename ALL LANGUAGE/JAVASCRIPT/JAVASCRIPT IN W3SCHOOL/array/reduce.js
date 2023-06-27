const num = [175,50,25];
document.getElementById("reduce").innerHTML = num.reduce(myFun);

function myFun(total, num){
    return total - num;
}

const num1 = ["madhav", "gediya"];
document.getElementById("reduce1").innerHTML = num1.reduce(myFun1);

function myFun1(total, num1){
    return total + num1 ;
}

 
const num2 = ["madhav", "gediya"];
document.getElementById("reduceright").innerHTML = num2.reduceRight(myFun2);

function myFun2(total, num2){
    return total + num2;    
}