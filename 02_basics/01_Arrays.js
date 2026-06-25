// Array

const myArr = [0,1,2,3,4,5]
const myCartoon = ['sinchan','doraemon']

const myArray2 = new Array(1,2,3,4)
// console.log(myArr);

// Array methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)  // value array ke start me add hogi not optimised
// myArr.shift()  // first element ko delete karega
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);

console.log("B ", myArr);

const myN2 = myArr.splice(1,3)
console.log("C ", myArr);

console.log(myN2);