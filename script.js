/* TODO:
  - Initialize buttons to event listeners 
  - Create a function to generate bot response
  - Set player response variable to appropriate return value
  - Create a function that accepts player and bot response and returns winner
  - Create a game function that handles results best out of 5 rounds with an end-game function and reset-game function
*/

// Initialize variables
let userWins = 0;
let botWins = 0;
let round = 1;

// Grab document elements and call functions
const rockBtn = document.querySelectorAll(".rock");
const paperBtn = document.querySelectorAll(".paper");
const scissorsBtn = document.querySelectorAll(".scissors");
const resetBtn = document.getElementById("reset");

function game(e) {
    // TODO
}

// Returns computer's response
function computerPlay() {
    let computerSelection = 'ROCK';
    const n = Math.random();
    if (n <= 1/3) {
        computerSelection = 'PAPER';
    } else if ((n > 1/3) && (n <= 2/3)) {
        computerSelection = 'SCISSORS';
    }
    return computerSelection;
}    

function playRound(playerSelection, computerSelection) {
    // TODO
}

function updateText() {
    // TODO
}

function resetGame() {
    // TODO
}