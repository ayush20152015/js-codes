let score =33;

let scoretostring =String(score);

//console.log(typeof(scoretostring));

//console.log(typeof(score));

let num=1;

let numtobool=Boolean(num);

//console.log(numtobool);

let str=null;    // it gives NaN (Not an Number ) 

let stringtonum=Number(str);

//console.log(stringtonum);

//console.log(typeof score);
//console.log(typeof(score));  both works well

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "ayush" => true


// *****************operations****************//

 
let a=2;
let b=1;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(2*a+b);
console.log(2*1.01+b);

console.log(a/(b*1.0));
console.log(a/b);

let str1="abc";
let str2="cvx";

console.log(str1+str2);

console.log(str1-str2);

 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + 2 + 2);
 console.log(1 + 2 + "2");

 //https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 

 // console.log(+true);
// console.log(+"");

let game=100;
game++;      // postfix operator
console.log(game);

++game;     // prefix operator

console.log(game);   













 
