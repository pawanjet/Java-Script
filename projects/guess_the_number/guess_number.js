let randomNumber = parseInt(Math.random() * 100 + 1)

console.log(randomNumber);

const submit = document.querySelector("#submit")

const guessInputField = document.querySelector("#guessfield")

const guessText = document.querySelector(".guess")
 
const remainingChance = document.querySelector(".remaining")

const lowOrHi = document.querySelector(".lowOrHi")

const resultPara = document.querySelector(".resultPara")

const p = document.createElement("p")

let preGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    
    submit.addEventListener("click", (event) => {
        
        event.preventDefault()

        userGuessedNumber = parseInt(guessInputField.value)

        validateGuess(userGuessedNumber)

    })
} 

function validateGuess(userGuessedNumber) {
    
    if (userGuessedNumber === "" || userGuessedNumber < 1 || userGuessedNumber > 100 ||isNaN(userGuessedNumber)) {

        alert("Please input correct value")

        console.log("Please input correct value");

    } else {
            
        preGuess.push(userGuessedNumber)

        console.log(`you inserted ${userGuessedNumber}`);
        
        if (numGuess > 10) {
            
            console.log("Num of guess chanch lapse", numGuess);

            displayeGuess(userGuessedNumber)

            displayMessage(`Game Over! You have to Guess ${randomNumber}`)

            endGame()
        } else {
            
            console.log("Num of guess chanch ", numGuess);

            displayeGuess(userGuessedNumber)

            checkGuess(userGuessedNumber)
        }

    }
}

function checkGuess(guess) {
    
    console.log("checkGuess", guess);

    if (guess === randomNumber) {
        
        displayMessage(`You guessed it Right`)

        endGame()

    } else if (guess < randomNumber) {
        
        console.log("guess is less");
        
        displayMessage(`You guessed number is too low`)
        
    } else if (guess > randomNumber) {
    
        console.log("guess is high");

        displayMessage(`You guessed number is too high`)
        
    }
}

function displayeGuess(guess) {
    
    console.log("displayeGuess", guess);

    guessInputField.value = ''

    guessText.innerHTML += `${guess} `

    numGuess++;

    remainingChance.innerHTML = `${11 - numGuess}` 
}

function displayMessage(message) {
    console.log("display message", message);

    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    
    const newGameButton = document.querySelector("#startNewGame")

    newGameButton.addEventListener("click", (event) => {
        
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = []
        numGuess = 1

        lowOrHi.innerHTML = ""
        guessText.innerHTML = ""
        remainingChance.innerHTML = `${11 - numGuess}`
        resultPara.removeChild(p)
        playGame = true
    })
}

function endGame() {
    
    guessInputField.value = ""
    guessInputField.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="startNewGame">Start new Game</h2>`

    resultPara.appendChild(p)

    playGame = false

    newGame()
}









