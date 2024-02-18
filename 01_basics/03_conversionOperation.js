let score = "35" 

//console.log(score);

let scoreInNumber = Number(score)

//console.log(scoreInNumber);

//console.log(typeof scoreInNumber);


let score2 = "35abc" 

//console.log(score2);

let score2InNumber = Number(score2)

//console.log(score2InNumber); // this line will print NaN - Not a Number

//console.log(typeof score2InNumber); // here you can see score2 return number while checking typeof, because Number class converting string into number but it is NaN while string is not proper number.

/* Number convertion */

// "33" => 33
// "33abc" => Nan
// null => 0 , because null is a object
// undefined => NaN
// true => 1
// false => 0


/* Boolean convertion */

// 1 => true
// 0 => false
// -1 => true
// "" => false
// "abc" => true
// null => false
// undefined => false


let loggedIn = undefined
let booledLoggedIn = Boolean(loggedIn) //converting positive or negetive number into boolean return 'true' and 0 convert into return 'false'.

//console.log(booledLoggedIn);   

/* String convertion 

1. 33 => 33 in string

*/

let numberToConvert = null

let numberConvertion = String(numberToConvert)

//console.log(numberConvertion);
//console.log(typeof numberConvertion);



// ******************** Operation *********************

let value = 3
let negValue = -value  // converting +Ve into -Ve
//console.log(negValue);

// console.log("1" + 3);

// console.log(1 + "3");

// Prefix and Postfix ops

let x = 3
let y = x++

console.log(`x: ${x} y: ${y}`);


let a = 3
let b = ++a

console.log(`a: ${a} b: ${b}`);

