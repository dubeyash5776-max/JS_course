const actors = ["amir khan", "hritik roshan", "shahrukh khan"]
const movies = ["lagaan", "super30", "pathan"]

// actors.push(movies)
// console.log(actors);
// console.log(actors[3]);
// console.log(actors[3][1]);

// actors.concat(movies)
// console.log(actors); 

// const newVar =  actors.concat(movies)
// console.log(newVar);  

// const newA = [...actors, ...movies]
// console.log(newA);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArray.flat(Infinity)
// console.log(realAnotherArr);


console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))
console.log(Array.from({name: "Ashish"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));