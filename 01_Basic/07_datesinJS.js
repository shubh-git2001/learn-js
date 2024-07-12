// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(5,10,2024);
// let myCreatedDate = new Date(2024,5,11,5,24);
let myCreatedDate = new Date ("01-14-2024") 
// console.log (myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(typeof myTimeStamp)
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();
console.log (newDate);
// console.log (newDate.getMonth() + 1);
// console.log(newDate.getHours());

// `${newDate.getDate()} and the time is`
newDate.toLocaleString('dafault', {
    weekday: "long",
} )