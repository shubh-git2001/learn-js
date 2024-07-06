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

// ************ Operations ************
// let value = 2;
// let negValue = -value;
// console.log (negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Namaste";
let str2 = " Duniya"

// add two string 
let str3 = str1 + str2;
console.log(str3);

console.log ("1" + 2);
console.log (1 + "2");
console.log ("1" + "2" + 2);
console.log (1 + 2 + "2");
console.log("2"+1+1);

// first no. is string than all no will string 
// if first no. is no. than it can be add and proceed next value 

