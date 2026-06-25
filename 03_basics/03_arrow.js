const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()\

// console.log(this);

// function one() {
//     let username = "Ashish"
//     console.log(this.username);
// }
// one()


// const chai = function() {
//     let username = "Ashish"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Ashish"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Ashish"})

console.log(addTwo(3, 4));
