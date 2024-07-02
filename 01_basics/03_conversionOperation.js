// <<<<-----Number Conversion----->>>>

const score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));
//--->>>
let getScore1 = Number(score1)
console.log(typeof getScore1);
console.log(getScore1); // Output --> 33 [Number]

const score2 = "33abc"
console.log(typeof score2);
console.log(typeof(score2));
//--->>>
let getScore2 = Number(score2)
console.log(typeof getScore2);
console.log(getScore2); // Output --> NaN [NaN :-> Not a Number], Its a special type.

const score3 = null
console.log(typeof score3);
console.log(typeof(score3));
//--->>>
let getScore3 = Number(score3)
console.log(typeof getScore3);
console.log(getScore3); // Output --> 0 (Zero)

const score4 = undefined
console.log(typeof score4);
console.log(typeof(score4));
//--->>>
let getScore4 = Number(score4)
console.log(typeof getScore4);
console.log(getScore4); // Output --> NaN [NaN :-> Not a Number], Its a special type.

const score5 = true
console.log(typeof score5);
console.log(typeof(score5));
//--->>>
let getScore5 = Number(score5)
console.log(typeof getScore5);
console.log(getScore5); // Output --> 1 [For 'True'=>1 & for 'False'=>0]

const score6 = false
console.log(typeof score6);
console.log(typeof(score6));
//--->>>
let getScore6 = Number(score6)
console.log(typeof getScore6);
console.log(getScore6); // Output --> 0 [For 'True'=>1 & for 'False'=>0]

const score7 = "Subhadip"
console.log(typeof score7);
console.log(typeof(score7));
//--->>>
let getScore7 = Number(score7)
console.log(typeof getScore7);
console.log(getScore7); // Output --> NaN [NaN :-> Not a Number], Its a special type.



// Comparision of all types of data to number ---->>>
console.table([score1, score2, score3, score4, score5, score6, score7]);
console.table([getScore1, getScore2, getScore3, getScore4, getScore5, getScore6, getScore7]);

/*
0) "33" => 33
1) "33abc" => NaN
2) null => 0
3) undefined => NaN
4) true => 1
5) false => 0
6) "Subhadip" => NaN
*/


// <<<<<------Boolean Conversion----->>>>>

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); // Output --> True [1=> True || 0=> False]

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); //Output --> False

let isLoggedIn3 = "Subhadip"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); //Output --> True

// Comparision of all types of data to Boolean ---->>>
console.table([isLoggedIn1, isLoggedIn2, isLoggedIn3]);
console.table([booleanIsLoggedIn1, booleanIsLoggedIn2, booleanIsLoggedIn3]);

/*
0) 1=> True
1) 0=> False
2) "" => False
3) "Subhadip" => True
*/


//<<<<<-----String Conversion----->>>>

let someNum = 33
let stringNum = String(someNum)
console.log(stringNum); // Output -->> 33
console.log(typeof stringNum); // Output -->> String