// IIFE - Immediately invoked function expression

(function connect() {
    console.log("DB Connected");
})();

((dbName) => {
    console.log(`DB connected 2 ${dbName}`);
})("Mongo");


let key = 3

switch (key) {
    case 1:
        
        break;
    
    case 2:
        
        break;
    case 3:
        
        break;

    default:
        break;
}

// Nullish Coalescing operator (??)

let val1
 
//val1 = 5 ?? 10

//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? undefined ?? 20

console.log(val1);

// Terniary operator

//condition ? true : false

let iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than 80") : console.log("Greater than 80");