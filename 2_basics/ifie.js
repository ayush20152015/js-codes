// immediatley invoke function expression (IIFE)

(function display(){

    console.log("ayush");   // namediffie
})();   // semicolon is necessary to execute as it has to stop the context here





(()=>{
  console.log("ayush");    // unnamed iffie
})();


const add=(num1,num2)=>(num1+num2);

console.log(add(3,4));     // for arrow function 


