const tinderuser={};

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isLoggedin=false;

//console.log(tinderuser);

const regularUser={
    
    email:"some@gmail.com",
    userdetail:{
        id:"123sammy",
        name:"sammy heigsbe",
        location:"rudolph street ,LA (US)",  

          device_details:{
              
              type:"iphone",
              language:"en-US",
              sessiontime:1234,
              
          }
    },

    

};


//console.log(regularUser.userdetail.device_details.type); access of objects within objects

//const obj1={1:"a",2:"b"};
//const obj2={3:"c", 4:"d"};

//const obj3={obj1,obj2};

//console.table(obj3);

//const obj={...obj1,...obj2};   // spread is used to combine objects

//console.log(obj);

//const obj4=Object.assign(obj1,obj2);  // combine objects

//console.log(obj4);

const users=[

    {id:1,email:"ayush@gmail"},{},{},{}   // multiple objects can be present in array


]

console.log(users[0].id);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedin'));

const course={

    coursename:"js",
    price:"999",
    courseinstructor:"ayush",
}

const {courseinstructor:instructor}=course;   // destructuring

console.log(instructor);







