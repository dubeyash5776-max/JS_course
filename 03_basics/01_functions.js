// function myName(){
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }
// myName()

// function add(num1, num2) {
//     return num1 + num2
// }
// const result = add(4, 4)
// console.log(result);

// function loginUserMessage(username = "Dubey"){
//     if(username === undefined){
//         console.log("Please Enter a Username");
//         return;
//     }

//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


function calculateCartPrice(...num1) {  //rest operator
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 800));

const user = {
    username: "ashish5776",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

const newArr = [100, 800, 400, 600]
function returnSecondValue(getArr) {
    return getArr
}