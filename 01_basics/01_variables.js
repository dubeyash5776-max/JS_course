const accountId = 42
let accountEmail = "Ashish@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

// accountId = 24  // not allowed
console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "Dubey@gmail.com" //changed

accountPassword = "4321"         //changed

accountCity = "noida"            //changed

/*
prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])