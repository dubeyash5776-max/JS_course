//      Immediately Invoked Function Expression 

(function chai(){
    console.log(`DB CONNECTED`);
})(); // ; is required to end the function
// global scope ke pollution ko hatane ke liye use karte hain
// ()()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}
)('Ashish')