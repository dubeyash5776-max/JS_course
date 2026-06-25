// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ashish",  //ye by default string leta hai ie. "name"
    "full name": "Ashish Dubey", // isko . operator se access nhi kar skte
    [mySym]: "myKey1",
    age: 19,
    location: "renukoot",
    email: "Ashish@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Sunday"]
}
// console.log("Name:", jsUser.name);
// console.log("Name:", jsUser["name"]);
// console.log("Name:", jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);  //As symbol

jsUser.email = "Dubey@gmail.com"
// console.log("Name:", jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.email = "Dubey@kiet.edu"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Ashish");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Ashish, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());