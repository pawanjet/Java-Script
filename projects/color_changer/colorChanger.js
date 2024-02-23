const buttons = document.querySelectorAll(".button")
//console.log(buttons);

const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener("click", (event) => {
        console.log(event);
        console.log(event.target);

        if (event.target.id === "grey") {

            body.style.backgroundColor = "gray"

        } else if (event.target.id === "white") {

            body.style.backgroundColor = "white"

        } else if (event.target.id === "blue") {

            body.style.backgroundColor = "blue"

        } else if (event.target.id === "yellow") {
            
            body.style.backgroundColor = "yellow"
        }
    })
})