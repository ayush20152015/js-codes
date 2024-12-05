function sayMyname(){

    console.log("A");
    console.log("Y");
    console.log("U");
}


//sayMyname();

function addTwoNumbers(a,b){    // a and b is parameter
     
     console.log(a+b); 

};

//addTwoNumbers(2,3);   // 2,3 is arguments


//const result=addTwoNumbers(2,3);

//console.log(addTwoNumbers(3,4));   // get undefined as function is not returning anything 

// so we need to addTwoNumbers and assing it to a variable so we need to return it 

function add(a,b){

     return a+b;  // end of the function
};

//const res=add(3,4);

//console.log(res);

 
//const res2=add(3,"4"); // consider 3 as string

//console.log(res2);
function uselogin(username="ayush"){ // default parameter

     if(!username){

             console.log("please enter a username");

             return;
     }
  
      return `${username} just logged in`;
};

//console.log(uselogin()); // run on default parameters



















// function in js act same as other languages

function calculatecartprice(num1){

           return num1;
}

console.log(calculatecartprice(200,400,500)); // only 200 will be printed 


// rest operator

function calculateprice(...num1){ // rest operator pack the value in the array 

       return num1;
}

//console.log(calculateprice(200,300,400)); 


const user={

      username:"ayush",
      price:199,
}

function handleobject(object){
        console.log(`username is ${object["username"]} and price is ${object["price"]}`);
}

//handleobject(user);

function getval(array){
      
      if(array.length<2){

          return null;
      }

     return array[1];
}

console.log(getval([12,13,14,15]));










