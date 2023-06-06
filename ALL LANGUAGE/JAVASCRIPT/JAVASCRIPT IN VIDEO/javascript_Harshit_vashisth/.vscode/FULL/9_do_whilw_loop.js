let a= 0; 
do {
    console.log(a);
    a++;
}while(a <10);


console.log("do - while with for skip (5 %) ");

let a1= 0;
do {
    a1++;
    if(a1 % 5 == 0){
        continue;
    }
    console.log(a1);
}while( a1 <10);