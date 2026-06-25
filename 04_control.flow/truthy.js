const username = "Ashish@5776"

if (username) {
    console.log("Got username");
} else {
    console.log("Don't have username");
}

// Falsy values
    // 1. false
    // 2. 0, -0
    // 3. BigInt 0n
    // 4. null, undefined, NaN
    // 5. "" => empty string

// Truthy values
    // 1. "0"
    // 2. 'false'
    // 3. " "
    // 4. [], {} => empty array/object
    // 5. function(){} => empty function 

// false == 0  =>true
// false == '' =>true
// 0 == ''     =>true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 =  null ?? 10
// val1 = undefined ?? 22
val1 = null ?? 10 ?? 20


console.log(val1);


// Ternary Operator

// condition ? true : false
