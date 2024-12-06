//// diffrent types of data structure can be provided in backend 
//
//// for of loop
//
////["","",""]
//
//// [{},{},{}];
//
//const arr=[1,2,3,4,5];
//
//for(let it of arr){
//     
//     console.log(it);
//}
//
//const greetings="hello world";
//
//for(let it of greetings){
//     
//      
//      console.log(it);
//}
//
//const map=new Map()
//
//map.set('IN',"India");
//map.set('USA','United States');
//map.set('Fr',"France");
//
//
//for(let it of map){
//
//     console.log(it);
//}
//
//console.log(map);

// to print the map we have key and value

// like in cpp first is given as key and second is the value


//const m=new Map();
//
//m.set(1,"a");
//m.set(2,"b");
//m.set(3,"c");
//
//for(const [key,value] of m){
//
//       console.log(value);
//}
//
//for(const [key,value] of m){
//     
//    console.log(key);
//}

const myobj={
     
     "1":"a",
     "2":"b",
     "3":"c",
}

//for(const [key,value] of myobj){
//
//     console.log(key);     // objects are not iteratable
//}

// for of loop cannot be iterated in objects

// for in loop is used to iterate in objects

for(const key in  myobj){

       //  console.log(myobj[key]); // does not print the value but the key
}

// we have to access the values from the key

const prog=["a","b","c","d"];

for(const it in prog){

     //console.log(it);   // print the keys of array

     //console.log(prog[it]);  // orint the values 
}

// FOR EACH LOOP

//prog.forEach(function (value){console.log(value)}); // the elements of the array is passed in the function

//prog.forEach((value)=>(console.log(value)));

//prog.forEach((value)=>{console.log(value)});

//prog.forEach((value,key)=>(prog[key]=value+"b")); 

//prog.forEach((value)=>(console.log(value)));



// forEach takes three parameter (value,key,arr);



const mycoding=[

    {
     
         lang:"cpp",
         val:"1",


    },
    {
        lang:"java",
        val:"2", 

    },
    {

        lang:"rb",
        val:"3",
    }
]


//mycoding.forEach( (value)=>{console.log(value.lang)} );








