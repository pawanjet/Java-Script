let map = new Map()

map.set(1, "Pawan")
map.set(2, "Bhumi")
map.set(3, "Aditya")
map.set(4, "Pawan")
console.log(map);

for (const [key, value] of map) {
    
    console.log(`key ${key} and value ${value}`);
}

console.log("*************** for in loop on map ***********");

for (const key in map) {
    console.log(key);
}
