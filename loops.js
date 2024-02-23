
let hero = ["Shaktiman", "Hanuman", "Ram"]

for (let index = 0; index < 10; index++) {
    
    console.log(index);
}

let pos = 0
while (pos < hero.length) {
    
    console.log(`value of hero at ${pos} is ${hero[pos]}`);

    pos++
}

console.log("*********************");

let score =0 
do {
    
    console.log(`value of hero at ${score} is ${hero[score]}`);

    score++

} while (score < hero.length);

console.log("********************* for of loop");

for (const iterator of hero) {
    
    console.log(iterator);
}

console.log("********************* for of loop2");

let str = "Hello world"

for (const iterator of str) {
    console.log(iterator);
}


const myObject = {
    js: "JavaScript",
    ja: "Java",
    rb: "ruby",
    swift: "swiftUi"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

for (const key in hero) {
    console.log(hero[key]);
}


console.log("*************** foreach loop ***********");

hero.forEach((value, index) => {

    console.log(value, index);
})

console.log("*************** foreach loop with function as parameter ***********");


function printme(item) {
    console.log(item);
}

const printme_arrow = (item)=> {
    console.log(item);
}

hero.forEach(printme)

console.log("*************** foreach loop with arrow function as parameter ***********");

hero.forEach(printme_arrow)

console.log("*************** foreach loop with array of object ***********");


const coding = [ 

    {

        language: "Java",
        shortName: ".java"
    },
    {

        language: "javaScript",
        shortName: ".js"
    },
    {
        
        language: "Python",
        shortName: ".py"
    }
]

coding.forEach((obj, index) => {
    
    console.log(obj.language);
})

console.log("****************** filter ****************");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNumbs = myNums.filter((value, index) => value > 4)


const myNewNumbs2 = myNums.filter((value, index) => {
    return value > 4
})

console.log(myNewNumbs);

console.log(myNewNumbs2);

console.log("****************** map ****************");

const numUsingMap = myNums.map((value) => {
    
    if (value > 5) {
        return value + 5
    } else {
        return value
    }

})

console.log(numUsingMap);

console.log("****************** map and filter chaining ****************");

const myNewNums = myNums
        .map((value) => { return value * 10 })
        .map((value) => { return value + 1 })
        .filter((value) => value > 40)

console.log(myNewNums);

console.log("****************** reduce ****************");

let sumWithInitial = 0

let newReduceArray = myNums.reduce((previousValue, currentValue) => {
    
    return previousValue+currentValue

}, sumWithInitial)

console.log(newReduceArray);

const techCourse = [

    {
        courseName: "Java",
        price: 50
    },
    {
        courseName: "Python",
        price: 40
    },
    {
        courseName: "JavaScript",
        price: 90
    }
]

const courseSum = techCourse.reduce((acc, obj) => {
    
    return acc + obj.price

}, sumWithInitial)

console.log(`course sume ${courseSum}`);