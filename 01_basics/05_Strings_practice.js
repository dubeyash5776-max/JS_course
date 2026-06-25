// Big
/* The big() method of String values creates a string that embeds this string in a <big> element (<big>str</big>),
 which causes this string to be displayed in a big font.*/
//  const contentString = "Hello, world";
// console.log(contentString.big())   
// //output
// <big>Hello, world</big>
//old JS string method 


// at()
    // const name = String('Ashish Dubey')
    // let index1 = 5  //h
    // let index2 = -5 //D
    // console.log(`at index ${index1} the value is ${name.at(index1)}`);
    // console.log(`at index ${index2} the value is ${name.at(index2)}`);


// charAt() 
    // console.log(`at index ${index1} the value is ${name.charAt(index1)}`);
    // console.log(`at index ${index2} the value is ${name.charAt(index2)}`);

    // Both at() and charAt() are used to get a character from a string, but there are some important differences.
    // | Feature             | `charAt()`                  | `at()`              |
    // | ------------------- | --------------------------- | ------------------- |
    // | Syntax              | `str.charAt(index)`         | `str.at(index)`     |
    // | Negative indexes    | ❌ Not supported             | ✅ Supported         |
    // | Out-of-range index  | Returns `""` (empty string) | Returns `undefined` |
    // | Works on arrays too | ❌ No                        | ✅ Yes               |


// charCodeAt() => returns the numeric UTF-16 code. 
    // console.log("a".charCodeAt(0)); // 97
    // console.log("A".charCodeAt(0)); // 65
    // console.log("0".charCodeAt(0)); // 48
    // console.log(" ".charCodeAt(0)); // 32
    // console.log("é".charCodeAt(0)); // 233
    // Modern alternative: codePointAt() => str.codePointAt(index)**
    // It is not ascii code it is better than that


// codePointAt() => returns the Unicode code point of the character at a given position in a string.
    // console.log("A".codePointAt(0)); // 65
    // console.log("₹".codePointAt(0)); // 8377
    // console.log("你".codePointAt(0)); // 20320
    // console.log("😊".codePointAt(0)); // 128522

// concat()
    // const str1 = "Hello";
    // const str2 = "World";
    // console.log(str1.concat(" ", str2));
    // // Expected output: "Hello World"
    // console.log(str2.concat(", ", str1));
    // // Expected output: "World, Hello"

// constructor() => The constructor method is a special method of a class for creating and initializing an object instance of that class.
    // Summary
    // obj.constructor → tells you which function/class created the object.
    // constructor() inside a class → special method that initializes objects.
    // Runs automatically when new is used.

// endsWith() => endsWith() checks whether a string ends with a specified sequence of characters.
// returns boolean
    // const str = "Ashish Dubey";
    // console.log(str.endsWith("Dubey"));
    // console.log(str.endsWith("Ashish"));
    // console.log(str.endsWith("Ashis", 5));  //JavaScript only considers the first 5 characters: Ashis
// endsWith() is commonly used in validation tasks such as checking file extensions, URLs, email domains, and naming conventions.

// Related Methods
// Method	Purpose
// startsWith()	Checks beginning of string
// endsWith()	Checks end of string
// includes()	Checks if string contains text
    // const str = "JavaScript";
    // console.log(str.startsWith("Java")); // true
    // console.log(str.endsWith("Script")); // true
    // console.log(str.includes("ava"));    // true

// indexOf() => indexOf() is used to find the position (index) of a substring or character inside a string.
    // const beasts = ["ant", "bison", "camel", "duck", "bison"];
    // console.log(beasts.indexOf("bison")); // Expected output: 1 // Start from index 2
    // console.log(beasts.indexOf("bison", 2)); // Expected output: 4
    // console.log(beasts.indexOf("giraffe")); // Expected output: -1

// isWellFormed() => a modern JavaScript String method that checks whether a string is well-formed Unicode.
    // Returns
    // true → the string contains only valid Unicode code points.
    // false → the string contains lone surrogate code units (invalid Unicode sequences).

// toWellFormed() => If a string is not well-formed, you can fix it:
    // const str = "\uD800";
    // console.log(str.isWellFormed()); // false
    // console.log(str.toWellFormed()); // "�"

// lastIndexOf() => searches a string from right to left and returns the index of the last occurrence of a specified value.
    // const str = "Hello Hello";
    // console.log(str.lastIndexOf("Hello")); // the last Hello starts with index 6 
    // // Using fromIndex
    // const str2 = "banana";
    // console.log(str2.lastIndexOf("a", 3));

    