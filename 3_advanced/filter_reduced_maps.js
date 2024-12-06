const arr=["a","b","c","d","e"];

//const values=arr.forEach((item)=>{return item});

//console.log(values);  // gives an undefined value as scope of item is just in the function

const a=[1,2,3,4,5,6,7];

//const newnums=a.filter((num)=> (num>4));

//console.log(newnums);

//const n=arr.filter((val)=>(val!="a"));

//console.log(n);

// other way instead of using filter we can do diffrent method

const newarr=[];

// other way of doing it a.forEach((val)=>((val>=4)?newarr.push(val):null));


//console.log(newarr);


// excercise for filter 

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
      genres: ["Fiction", "Classic", "Historical"],
      isAvailable: true
    },
    {
      title: "1984",
      author: "George Orwell",
      yearPublished: 1949,
      genres: ["Fiction", "Dystopian", "Political"],
      isAvailable: false
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
      genres: ["Fiction", "Classic"],
      isAvailable: true
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      yearPublished: 1951,
      genres: ["Fiction", "Classic", "Coming-of-Age"],
      isAvailable: false
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      yearPublished: 1813,
      genres: ["Fiction", "Classic", "Romance"],
      isAvailable: true
    }
  ];
  
  //console.log(books);

  // print all the books with romance as genre

// function check(tt){
//    
//    let fl=false;
//     
//    
//    tt.genres.forEach((v)=>{if(v==='Fiction'){fl=true}});
//
//    return fl;
//
//
//      
// };
//
// const bks=books.filter((val)=>(check(val)));
//
//
// console.log(bks);

//const newarr2=a.map((value)=>(value+10));
//
//console.log(newarr2);
//
//// chaining is also possible
//
//const newarr3=a.map((value)=>(value+10)).map((value)=>(value*2));
//
//console.log(newarr3);
//
//const newarr4=a.map((value)=>(value+10)).filter((value)=>(value>=13));
//
//console.log(newarr4);

// REDUCE LOOPING METHOD

const sum=a.reduce((acc,curr)=>(acc+curr),0);

// syntax array.reduce((accumlator,current_value)=>(accumlator+current_value),intialvalue)

console.log(sum);





  



