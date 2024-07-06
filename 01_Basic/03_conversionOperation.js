// let score = "33abc";
// let score = null;
let score = undefined
console.log(typeof score); // Both are Same 
console.log(typeof (score));

/* Vaise score declare "string" mein kiya hai but "valueInNumber" ka use karke "Number" mein change kar sakte hai */


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// valueInNumber 
// "33" --> 33
// "33abc" --> NaN (Not a Number )
// NOTE :- NaN ka type number hee rahega 
// true -->1; false --> 0
// null --> 0
// undefined --> NaN

   