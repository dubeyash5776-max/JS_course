const coding = ['js', 'cpp', 'python', 'c']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach ((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// })

const myCoding = [
    {
        langName: "javascript",
        langFileName: 'js'
    },
    {
        langName: 'python',
        langFileName: 'py'
    },
    {
        langName: 'java',
        langFileName: 'java'
    }
]

myCoding.forEach( (item)=> {
    console.log(item.langName);
    
})