
let name = "Aditya"

const user = {
    name: "Pawan",
    price: 100,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`);
    }
}

user.welcomeMessage()
user.name = "Bhumi"
user.welcomeMessage()

console.log(this);

function add() {
    let name = "Shiva"
    console.log(name);
}

add()

const arrowFunction = () => {
    console.log("Welcome to arrow function");
}

const implesiteReturn = (num1, num2) => num1 + num2

const implesiteReturn2 = (num1, num2) => (num1 + num2)

const implesiteReturn3 = (num1, num2) => ({userName : "Hitesh"})

console.log(implesiteReturn(3, 4));

console.log(implesiteReturn2(3, 4));

console.log(implesiteReturn3(3, 4));

arrowFunction()