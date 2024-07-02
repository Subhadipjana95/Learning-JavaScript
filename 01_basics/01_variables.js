const accountID ="Subhadip95"
let accountEmail ="Subhadip@gmail.com"
var accountPassword ="65763247"
accountCity ="Kolkata"

console.table([accountID, accountEmail, accountPassword, accountCity])

// accountID ="Savi09" 
/*Not allowed to change the value of const in javascript
*/
accountEmail ="subha@outlook.com"
accountPassword ="6732565"
accountCity ="Noida"
let accountState; // Javascript will give its value as 'undefined'

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because of the issue in block scope and functional scope
*/