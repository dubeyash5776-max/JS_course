// primitive
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id == anotherid);

const bigNumber = 8647496741967




// Reference types (Non primitive )
// Array, objects, Function

// const heros = ["Shaktiman", "Superman", "Batman"]
// let myObj = {
//     name: "Ashish",
//     age = 22,
// }

const myFunction = function(){
    // console.log("hello World");
    
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Ashish"


let anotherName = myName
anotherName = "Dubey"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "userOne.gmail.com",
    upi: "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


// Stack => primitive => call by value
// Heap =>  Non primitive => call by Reference