// let score = "33abc";
// let score = null;

let score = undefined
//console.log(typeof score); // Both are Same 
//console.log(typeof (score));

/* Vaise score declare "string" mein kiya hai but "valueInNumber" ka use karke "Number" mein change kar sakte hai */

// Number Conversion
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// console.log(valueInNumber);

// valueInNumber 
// "33" --> 33
// "33abc" --> NaN (Not a Number )
// NOTE :- NaN ka type number hee rahega 
// true -->1; false --> 0
// null --> 0
// undefined --> NaN


// Boolean Conversion
let isLoggedIn = "";
let booleanisLoggedIn = Boolean(isLoggedIn);
//console.log(booleanisLoggedIn);

// Boolean Conversion by --> isLoggedIn
// 1 --> true ; 0 --> false
// "" --> false ; " " --> true 
// "shubham" --> true

// String Conversion 
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);