let a=10;
let b=20;
let c=30;

//console.log(a);
//console.log(b);
//console.log(c);

{
    //a=20;   // this a is not same as above a 

      

    //console.log(a);

      
}

const x=40;

{
     // x=30;

      //console.log(x);  // give error as value cannot be changed for const type
}

// problem with var

//var d=500;

//if(true){

 //   var d=30;
//}

//console.log(d);  // suppose to be 500 but its value is changed in localnamespace which must not suppose to happen

// the values in global namespace is available in local namespace but the value for local namespace does not affect the values in global one

console.log(addtwo(3));

function addtwo(num){

     return num+2;
}     // but this will work 


//const vl=addtwo(3);  // function is declared before it can be accessed so it is hoisting 





