
const regualrUser = {
    email: "Pawan@gmail.com",
    userName: {
        name: "Pawan",
        fullName: {
            first_name: "Pawan",
            last_name: "Jha"
        }
    }
}

const whatsAPPUser = {
    name: "Pawan",
    location: "Pune"
}

console.log(regualrUser);

console.log(regualrUser.email);

console.log(regualrUser.userName.fullName.first_name);

let obj1 = { 1: "a", 2: "b" }
let obj2 = { 3: "c", 4: "d" }

// let obj3 = { obj1, obj2 }
// console.log(obj3);

// console.log("before obj1: ", obj1);

// let assignObj = Object.assign({}, obj1, obj2)

// console.log("after obj1: ",obj1);

// console.log("new assignObj: ", assignObj);

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

console.log(Object.keys(regualrUser)); // keys method retruns arrays of keys

console.log(Object.values(whatsAPPUser)); // values method retrun arrays of values

console.log(Object.entries(whatsAPPUser)); // entries method retrun arrays of keys and values

console.log(whatsAPPUser.hasOwnProperty("name"))

const course = {
    course: "JS in hindi",
    teacher: "Hitesh",
    price: 999
}

const { price, teacher } = course

console.log(price);
console.log(teacher);
