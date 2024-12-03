// data are of two types in js 
// primitive and non-primitive
// primitve-data-types :- strings,number,boolean,BigInt,undefined,symbols


//  nonprimitve types   array,functions,objects

 
const a=[1,2,3,4,5];

for(let i=0;i<5;i++){
        
      console.log(a[i]);   

}


console.log(typeof(a));

function hello(){

      console.log("hello");
}

console.log(typeof hello);


hello();

let lambdafn=function(strings){      // int js function can be assiged to a variable 
       
     console.log(strings);
       
     
};


lambdafn("hello");

 
let myobj={

     name:"ayush",
     roll:33,
     branch:"eee"
     

    
};

console.log(myobj.branch);

console.table(myobj);

// https://262.ecma-international.org/5.1/#sec-11.4.3


