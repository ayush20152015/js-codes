let user={
    username:"ayush",
    class:"12th",

     welcome: function(username){
         
       //  console.log(` welcome ${username}`);
     }

       
}

//user.welcome("sam");


// this keyword use

const user2 ={
      
      username:"ayush",
      price:999,

      welcome: function(){

          console.log(`${user2.username}, welcome to website`);
     
          // console.log(this);
     
        }

     
}

//user2.welcome();

//user2.username="sam";
//user2.welcome();


// this function can also be used

const user3={

    username:"ayush",
    price:999,

    welcome : function(){

        console.log(`${this.username} , welcome to website`);
    
      // console.log(this);
    }

    
}

//user3.welcome();

//user3.username="sam";

//user3.welcome();

//console.log(this);  //talks about current context

// for browser the global object is window object and here it is empty object



//function chai(){
//
//    console.log(this);
//
//    let username="ayush";
//
//    console.log(this.username);   // no context of it so it will be undefined
//}

//function chai2(){
//
//    console.log(this);
//
//    console.log(this.username);   // no context of it so it will be undefined
//}

//chai();

//chai2();


 // this keyword does not work inside the function


 // arrow function

 const chai =()=>{

    let username="ayush";
   // console.log(this.username);   // this cannot be used
 }

 //chai();


const add= (num1,num2)=>{

    return num1+num2;   // explicit return
 }


 // another way with impicit return 


 const addtwo=(num1,num2)=>(num1+num2);   // two avoid writing return use paranthesis

 console.log(add(3,4));


 // to return objects use of paranthesis


 const nm= (user)=>({username:"ayush"});  // to return object use of paranthesis


 console.log(nm(2));







 


