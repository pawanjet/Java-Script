let myDate = new Date()
// console.log(myDate);
// console.log("toString: ", myDate.toString()); //toString:  Sun Feb 18 2024 17:02:30 GMT+0530 (India Standard Time)
// console.log("toISOString: ", myDate.toISOString()); //toISOString:  2024-02-18T11:29:35.136Z
// console.log("toJSON: ", myDate.toJSON()); //toJSON:  2024-02-18T11:29:35.136Z
// console.log("toLocaleDateString: ", myDate.toLocaleDateString()); //toLocaleDateString:  2/18/2024
// console.log("toLocaleTimeString: ", myDate.toLocaleTimeString()); //toLocaleTimeString:  4:59:35 PM
// console.log("toTimeString: ", myDate.toTimeString()); //toTimeString:  16:59:35 GMT+0530 (India Standard Time)
// console.log("getTime: ", myDate.getTime()); //getTime:  1708255775136


let createdDate = new Date(2023, 0, 12)
console.log("toDateString: ", createdDate.toLocaleString()); // yyyy-mm-dd

let createdDateFormat = new Date("2023-01-12") // yyyy-mm-dd
console.log("toDateString: ", createdDateFormat.toLocaleString());
console.log("getDay: ", createdDateFormat.getDay());
console.log("getMonth :", createdDateFormat.getMonth());
console.log("getFullYear :", createdDateFormat.getFullYear());


let createdDateFormat1 = new Date("12-01-2023") // mm-dd-yyyy
console.log("toDateString: ", createdDateFormat1.toLocaleString());

let timeStamp = Date.now() // current timestamp in mili sec
console.log("timeStamp: ", timeStamp);

console.log("timeStamp in sec: ", Math.floor(timeStamp/1000)); 