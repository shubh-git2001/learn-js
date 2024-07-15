//  Array
const myArr = [0,2,8,7,3,9];
// Access through there index 

// console.log (myArr[0]);


//  In Sabhi Tariko se Array assign kar sakte hai 
// const myHeroes = ["Shaktiman", "GoluBoba"];
// const mySecondArray = new Arr(1,4,5,6);
// console.log(mySecondArray[0]);

//  Array Methods 
// 1) Push => method used for add values in arrays

/*
myArr.push(6); 
myArr.push(7);
*/

// console.log(myArr);

// 2) pop => is used to remove last value in an array
// myArr.pop();
// unshift => is used to shift values for their respective place
// myArr.unshift(7);
// shift => used to remove first element in an array
// myArr.shift;

// includes => used to undestand the value are present or not so it's simply give ans in boolean format 
// console.log(myArr.includes(19));

// indexOf => are used to know the index no. of the element 
// console.log(myArr.indexOf(6));

// join => function is simply give array in string format by changin it's data type

/*
const newArr = myArr.join()
console.log(newArr);
console.log(myArr);

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //


// slice , splice --> method 

console.log("A ", myArr );

const  newArray1 = myArr.slice(1,3);
console.log(newArray1);

console.log("B ", myArr );


const  newArray2 = myArr.splice(1,3);
console.log(newArray2);

console.log("C ", myArr );

