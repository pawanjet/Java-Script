const array = [1, 2, 3, 4, 5, 6]

const strArray = ["pawan", "Aditya", "Bhumi"]

const array2 = new Array("Pawan", "Aditya", "Bhumi")

console.log(array[1]);

array.push(7) // adding element into end of the list

console.log(array);

array.pop()

console.log(array);

array.unshift(2) // adding value in start 

console.log("unshift: ", array);

array.shift() // removing value of start

console.log("shift: ", array);


console.log("includes: ", array.includes(0)); // this is same like contains method of java

console.log("indexOf: ", array.indexOf(0)); // return -1 if value not present in array 

let newArray = array.join() // convert array into string

console.log("newArray: ",newArray);

console.log("typeof newArray: ", typeof newArray) // newArray type is string


// ******************* slice / splice **********************

console.log("before slice array: ", array);

let sliceArray = array.slice(1, 3) // slice create copy of an array

console.log("after slice array: ", array);

console.log("sliceArray: ", sliceArray);

// splice

console.log("before splice array: ", array);

let spliceArray = array.splice(1, 3) // splice cut range element from array and create new array

console.log("after splice array: ", array); // here you can see only remaining elements are pending

console.log("spliceArray: ", spliceArray);
