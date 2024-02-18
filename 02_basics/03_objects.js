
// object singleton

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Pawan",
    "full_name": "Pawan jha",
    [mySym]: "myKey1",
    age: 34,
    location: "Jaipur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); 
console.log(jsUser.full_name);
console.log(typeof jsUser[mySym]);

jsUser.email = "pawan@gmail.com"
//Object.freeze(jsUser) // this way we can freeze object
jsUser.email = "pawanjha@gmail.com"
console.log(jsUser); // here you can see 'pawanjha@gmail.com' not inserting into email field after object freeze.

jsUser.greetingOne = function () {
    console.log("Hello Js User");
}

jsUser.greetingTwo = function () {
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greetingOne());
console.log(jsUser.greetingTwo());