let a= 0; 
while(a <10){
    console.log(a);
    a++;
}

console.log("while with for skip (5 %) ");

let a1= 0;
while( a1 <10){
    a1++;
    if(a1 % 5 == 0){
        continue;
    }
    console.log(a1);
}