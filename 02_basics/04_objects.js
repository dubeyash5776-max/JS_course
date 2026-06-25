// const tinderUser = new Object()  singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "chintu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Ashish@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Ashish",
            lastName: "Dubey"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }
// const obj3 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1,obj2,obj3)
// const obj4 = Object.assign(obj1,obj2,obj3)
// aisa karne se obj1 me sari value store nhi hoti
// console.log(obj4);
// console.log(obj1 == obj4); //false when using {}

// const obj4 = {...obj1, ...obj2, ...obj3} //spread operator
// console.log(obj4);

const users = [
    {
        id: 123,
        email: "A@gmail.com"
    },
    {
        id: 1234,
        email: "AD@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //sari keys ko array me rakh liya
// console.log(Object.values(tinderUser)); //sari values ko array me rakh liya
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object destructuring

const course = {
    courseName: "js hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const { courseInstructor: instructor } = course
// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Ashish",
//     "coursename": "js hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     .
//     .

// ]

