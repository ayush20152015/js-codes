const myarr=[1,2,3,4,5,5,6,7];

// array in js dynamic 

// array in js make shallow copy (refrence is same for both orignal and copied array);

myarr.push(8);

//console.log(myarr);

//console.log(myarr[0]);

const myarr1= new Array(1,2,3,4,5);

//console.log(myarr1);

myarr.pop();  // remove last element


//myarr.unshift();  // add the element
//myarr.shift();    // remove first element 
//console.log(myarr);

//console.log(myarr.includes(9));  // has boolean type return
//console.log(myarr.indexOf(3));  // returns index or -1 


const newarr=myarr.join();

//console.log(newarr);

//console.log(typeof newarr);


// important  slice and splice

let myn1= myarr.slice(1,3);   // last value is not included

//console.log("A",myarr);
//console.log(myn1);

let myn2=myarr.splice(1,3);    //include last value

console.log(myn2);    
console.log(myarr);     // manipulates the orignal array






