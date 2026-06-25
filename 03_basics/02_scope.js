// var c = 300  var ka scope global hota hai
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);

}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "ashish"

    function two() {
        const website = "neonpulse"
        // console.log(username);

        // console.log(website);
    }
    two()

}
one()

if (1) {
    const name = "ashish"
    if (name === "ashish") {
        const website = "neonpulse"
        // console.log(name + website);
    }
    // console.log(website);

}
// console.log(name);


// +++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++

addOne()
function addOne(num) {
    return num + 1
}
// addTwo()  Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}
addTwo()

