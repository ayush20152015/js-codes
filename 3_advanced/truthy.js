const userEmail=" ";

if(userEmail){
     

  console.log("user email detected");

}

else{
     
     console.log("dont have an email");
}


// "" has an false value
// [] has an true value

// falsy values:-
// false,0,-0,Bigint 0n,"",null,undefined,NaN


// truthy values

// "0",'false'," ",[],{},function(){} 


// how to check for empty array and empty object

//const arr=[];
//
//if(arr.length===0){
//     
//     console.log("empty array");
//}
//
//const empobj={};
//
//if(Object.keys(empobj).length===0){
//     
//      console.log("object is empty");
//}
//
//// Nullish Coalescing Operator(??):null undefined
//
//let val1;
//val1=5??20;
//
//console.log(val1);
//
//val1=null??20;  // 20 is available
//
//console.log(val1);
//
//val1=undefined??20;   // 20 is available
//
//console.log(val1);
//
//val1=undefined??20??10;  // extract the first value which is available
//
//console.log(val1);  
//
//val1=undefined??null; // gives null
//
//console.log(val1);
//
//val1=undefined??null??20;   // 20 is available
//
//console.log(val1);   


// ternary operator

let flag=3;

const val=(flag===3)?console.log("yes"):console.log("no");

// syntax value=(condition)?(statement if true):default statement if false








