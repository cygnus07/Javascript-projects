let randomNumber = Math.round(Math.random()*100+1);
// console.log(randomNumber);

const submit = document.querySelector('#submit-guess')
const previousGuesses = document.querySelector('.guesses')
const guessRemaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')
const input = document.getElementById('guess-field')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // to validate the user Input
    if(isNaN(guess)) 
        alert("Please enter a number")
    else if(guess<1 || guess > 100)
        alert("Please Enter a value between 1 and 100");
    else{
        prevGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`Game Over! <br> Random Number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    // to check the value 
    if(guess == randomNumber){
        displayMessage(`You Won! <br> You guessed the right number`)
        endGame();
    }
    else if(guess< randomNumber){
        displayMessage(`${guess} is less than the number`)
    }
    else{
        displayMessage(`${guess} is higher than the number`)
    }
}

function displayGuess(guess){
    input.value = ''
    previousGuesses.innerHTML += `${guess} `
   
    guessRemaining.innerHTML = `${11-numGuess}`
    numGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
    input.value = '' 
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style="cursor: pointer;" > Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        randomNumber = Math.round(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        input.removeAttribute('disabled')
        guessRemaining.innerHTML = `${11-numGuess}`
        previousGuesses.innerHTML = ''
        startOver.removeChild(p)

        playGame = true;

        
    })
}



// submit.addEventListener(function(e){
    
// })
// console.log(input);