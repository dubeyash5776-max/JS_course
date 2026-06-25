const name = "Ashish "
const rollNo = 42

// console.log(name + rollNo + " Dubey"); //old method

console.log(`Hello my first name is ${name}and roll number is ${rollNo}`);
//use this syntax

const gameName = new String('Ashish-Dubey-ashish')

// Notes
/*  The new operator lets developers create an instance of a user-defined object 
    type or of one of the built-in object types that has a constructor function.*/

/*  Constructor Function: 
    A class or function that specifies the type of the object instance. 
    The expression can be anything with sufficient precedence, 
    including an identifier, a property access, or another new expression, but optional chaining is not allowed.*/


console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('D'));

// ek bar strings ke sare methods ko go through kar lena
// browser --> inspect --> console --> const gameName = new String('Ashish') => enter gameName

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-11,4)
console.log(anotherString);

const newStringOne = "      Ashish      "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes white spaces

const url = "https://neonpulss.netlify.app/Ashish%42Dubey"
console.log(url.replace('%42','-'))
// console.log(url);

console.log(url.includes('Ashish'))

console.log(gameName.split("-"));
