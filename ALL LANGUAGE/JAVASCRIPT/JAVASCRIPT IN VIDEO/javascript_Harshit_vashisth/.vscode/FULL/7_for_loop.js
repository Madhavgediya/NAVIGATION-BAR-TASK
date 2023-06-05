for(let a= 0; a <10; a++){
    console.log(a);
}

console.log("if with for skip (5 %) ");

for(let a= 0; a <=10; a++){
    if(a % 5 == 0){
        continue;
    }
    console.log(a);
}