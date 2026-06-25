const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(2));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-In'));


// go through console part of Number and maths
/*+++++++++++++++++ MATHS +++++++++++++++++*/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));  //round off karega
// console.log(Math.ceil(4.5));   //. ke pehle se badi value dega
// console.log(Math.floor(4.8));  //. ke pehle se choti value dega
// console.log(Math.sqrt(169));   //Sqrt
// console.log(Math.sqrt(169));   //Sqrt
// console.log(Math.min(1,2,6,8,4));   
// console.log(Math.max(1,2,6,8,4));   

console.log(Math.random()); //value hamesh 0 aur 1 ke beech me ayegi
console.log((Math.random() * 10) + 1); //1 se badi values
console.log(Math.round(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log((Math.random() * (max - min + 1)) + min);
