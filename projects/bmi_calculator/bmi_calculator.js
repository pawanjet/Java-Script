const form = document.querySelector("form")

console.log(form);

const results = document.querySelector(".result")

results.innerHTML = "Result: "

console.log(results);
    
form.addEventListener("submit", (event) => {
    
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)

    const weight = parseInt(document.querySelector("#weight").value)

    
   
    if (height === "" || height < 0 || isNaN(height)) {
        
        results.innerHTML = `Please provide valid height`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        
        results.innerHTML = `Please provide valid weight`
    } else {

        const bmiResult = weight / ((height * height) / 10000).toFixed(2)
        
        results.innerHTML = `BMI Result: ${bmiResult}`
    }

})