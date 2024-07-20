// Object 
//   This video is totally dedicated for singelton & Contructor ---->


// const tinder = new Object () ; 

const tinderUser = {};


 tinderUser.id= "123abc";
 tinderUser.name = "Joe";
 tinderUser.LoggedIn = false;

// console.log(tinderObject);

const regularUser = {
   email : "root1@gmail.com",
   fullname : {
       userfullname: {
         firstname : "Shubham",
         lastname : "Shukla"
       }
   }

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {6:"c", 8:"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// Spread Operator **Mostly Used 
const obj4 = {...obj1, ...obj2, ...obj3} // very simple 
// console.log(obj4);


const users = [
    {
        email : "ht@gmail.com",
        id : "123ab"

    },

    {
        email : "ht@gmail.com",
        id : "123ab"

    },

    {
        email : "ht@gmail.com",
        id : "123ab"

    }
]

// users[1].email
// console.log(users[1].email)
// console.log(tinderUser);


// this is used to change obj into an array &  every single word has own meaning in this like {keys, values, entries}
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

// hasOwnProperty => Use to determine whether object is present in an array on not
//  console.log(tinderUser.hasOwnProperty('LoggedIn'))
   
 const course = {
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Badshah"
 } 
//  course.courseInstructor

const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);


// Small Example of Reactjs
const  navbar = ({company}) => {

}
navbar(company = "SSCorporation")
console.log(company)

// Json or api hume trah milti hai 
// {
//     "name" : "Shubham",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {}
]