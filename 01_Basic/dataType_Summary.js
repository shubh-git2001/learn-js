/* 
Primitive  
7 types :- 
String, Number, Boolean, null,undefined, Symbol, BigInt --> scientific value or big values can be store 
*/

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// **************************************************//
// **************************************************//



// Reference Type --> Non Primitive 

/* 
Non Primitive 
3 types :-
Arrays, Objects, Functions
*/


// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);


// This link used for reading dataType Documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Memory Used by Primitive dataType & Non Primitive dataType
// stack-memory => Primitive dataType
// Heap-memory => Non Primitive dataType 

// Stack Memory Example 
let myyoutubename = "shubhamshukladotcom"

let anothername = (myyoutubename);
anothername = "TheHashtagIndiandotcom"

console.log(myyoutubename);
console.log(anothername)

// Heap Memory Example

let userOne = {
    email : "shubham@googl.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "milan@boba.com"
console.log(userTwo)
