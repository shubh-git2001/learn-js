// skelton 
/* 
Two Methods in an onbject to decalre
 1 => Literals 
 2 => constructor 
 
 */
   

//Object literals 

// Decalre Array 
const mySys = Symbol("Key1")
const JsUser = {
    name : "Shubham",
    age : 22,
    email: "shubh@hotmail.in",
    isLoggedIn: "False",
    LastLogindays: ["Monday", "Saturday"],

    [mySys] : "Key1"
    
}

// console.log(JsUser);

// Both method use to access object
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser[mySys]);

// Overwrite value jo pehle se decalre hai 
// JsUser.email = "shubh@chatgpt.com";
// console.log(JsUser.email)

// JsUser.email = "shubh@chatgpt.com";
// Object.freeze(JsUser);
// console.log(JsUser.email);

// Value ko over-write nahi kar payenge 
// JsUser.email = "Shubham11@krok.com";
// console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello shubham");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello bhai, ${this.name}`);
}
console.log(JsUser.greetingTwo());
