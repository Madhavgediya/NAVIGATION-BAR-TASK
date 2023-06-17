function leap_year(){
    let input = document.getElementById("input1").value;
    // let output = document.getElementById("leap");
    
    if(input % 4 === 0){
       return document.getElementById("leap").innerHTML = input+" is leap year";
    }
    else
    {
        return document.getElementById("leap").innerHTML = input+" is not leap Year" ;

    }
}