const my_heros = ["hunuman", "shaktimaan", "naagraj"]

const marvel_heros = ["thor", "captain america", "iron man"]

my_heros.push(marvel_heros) // here push will not add element of marvel_heros into my_heros existing list. it add array inside my_heros

// console.log(my_heros);

// console.log(my_heros.includes(marvel_heros));

const my_super_heros = ["hunuman", "shaktimaan", "naagraj"]

let concatArray = my_super_heros.concat(marvel_heros) // concat return new array and it add elements of 2nd array into 1st

console.log(concatArray);

let spread_array = [...my_super_heros, ...marvel_heros] // ... with array used to spread elements

console.log("spread_array: ", spread_array);

let hybridArray = [1, 2, 3, [5, 6,], 7, [8, [9, 10]], 11]

let flatterArray = hybridArray.flat(Infinity) // in flat function we need to pass the depth to perform flat operation

console.log("flatterArray: ", flatterArray);

console.log(Array.isArray("Pawan")); // return true or false

console.log(Array.from("Pawan")); // convert string into array

console.log(Array.from({ name: "Pawan" })); // returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // create array using element
