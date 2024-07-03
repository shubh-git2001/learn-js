console.log("Shubham")
const accountId = 1234
let accountEmail = "shubhamdoodle.com"
var accountPassward = "12458"

/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/

let accountState;
accountCity = "Bihar"

// accountId = 2 not allowed 

console.log(accountId);
accountEmail = "hc.hc.com"
accountPassward = "3254"
accountCity = "Mumbai"


console.table([accountEmail,accountPassward,accountCity, accountState]);