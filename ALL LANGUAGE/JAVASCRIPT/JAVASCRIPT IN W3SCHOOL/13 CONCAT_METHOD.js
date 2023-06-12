function myFunctionConcat(){
    let text1 = document.getElementById("m-concat1").innerHTML;
    let text2 = document.getElementById("m-concat2").innerHTML;
    let text3 = text1.concat(" ",text2);
    document.getElementById("m-concat1").innerHTML = text3;

}