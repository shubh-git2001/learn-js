const marvel_heros = ["Ironman" , "Thor", "Spiderman"];
const dc_heros = ["Batman" , "Superman" , "Flash"];

// **** Hum yaha dono ko merge karna chahte the BUT yaha hogya blunder ***

// TALK ABOUT PROBLEM => Merge karne se 2nd Array as a Data ki tarah treat kiya jaega jisse hum access kaete waqt problem aaegi **********


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// concat => this can be used to merge two array 

// const bhailog = marvel_heros.concat(dc_heros);
// console.log(bhailog);

// spread this is very easy to use in javascript to merge two array 

/*
const bhaiyaBol = [...marvel_heros, ...dc_heros]
console.log(bhaiyaBol);
*/


// flat => used to simplify array in very lineant way 
const another_array = [1,2,3,[4,5,6],9,[6,7,[8,9]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(isArray("Hitesh"))