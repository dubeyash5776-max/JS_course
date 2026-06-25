// Dates And Time

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2007, 4, 15)
// let myCreatedDate = new Date(2007, 4, 15, 5, 3)
// let myCreatedDate = new Date("2026-06-14")
let myCreatedDate = new Date("06-14-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStampn = Date.now()

// console.log(myTimeStampn);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {weekday: "long"}))