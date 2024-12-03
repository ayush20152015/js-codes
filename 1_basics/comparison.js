// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


 console.log("2" > 1);
 console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);      // redundant comparison so these type of comparison does not work in typescript

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);      //   always give false

// ===    //  strict comparison as it compare data types as well

console.log("2" === 2);

