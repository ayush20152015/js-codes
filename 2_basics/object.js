// objects can be made in two ways in js as a literals and as a constructors
// objects made as a literals are not singleton and object made by constructors are singletons

// object literals

const mysym=Symbol("key1");

const jsuser={

    name:"Ayush",
    age:21,
    location:"patna",
    email:"ayush.choudhary.cd.eee22@itbhu.ac.in",
    isLoggedin:false,
    "fullname":"Ayush choudhary",
   // mysym:"key", not a right way this is not a symbol

   [mysym]:"key",
    


};

//console.log(jsuser.isLoggedin);      
//console.log(jsuser["isLoggedin"]);  // another way of accessing the elements in objects
// console.log(jsuser[email])  // it has to be passed as a string  as it is passed as a string in back
//console.log(jsuser[0]);  if index is number it can be passed directly

//console.log(jsuser["fullname"]) // gives error

console.log(jsuser.mysym);
console.log(typeof(jsuser[mysym]));   // not a symbol but a string 

//Object.freeze(jsuser);

jsuser.email="ayushchoudhary@gmail.com";  // does not change due to freeze 

console.log(jsuser);

// addition of function in objects

jsuser.greeting=function(){

      console.log(`hello js user`);
}

//console.log(jsuser.greeting());

jsuser.greeting2=function(){

    console.log(`hello js user , ${jsuser.name}`);


}

//console.log(jsuser.greeting2());

//




















