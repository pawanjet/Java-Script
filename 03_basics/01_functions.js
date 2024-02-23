function addTwoNumber(num1, num2) {
    
    console.log(num1 + num2);
}

function fun2(num1 , num2) {
    
    return num1 + num2
}

addTwoNumber(2, 3)

let result = fun2(4, 5)
console.log("Result: ", result);


function login(userName) {
    
    if (!userName) {
        return "Please enter userName"
    }

    return `${userName} logged in successfully`
}

function loginWithDefault(userName = "pawan") {
    
    return `${userName} logged in successfully`
}

console.log(login("Bhumi"))

console.log(loginWithDefault("Aditya"));

function calculatePrice(val1, val2, ...num1) {  // ... (rest operator) spread operator also called as rest operator while calling with single value
    return num1
}

console.log(calculatePrice(200, 400, 500, 2000)) // Output will [ 500, 2000 ], 200, 400 will go into val1 and val2 and 500 and 2000 will go into num1. and num1 is using rest operator(...) so function will retrun only array.
