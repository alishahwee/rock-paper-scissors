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

// Play the game
function game(playerSelection) {
    let playerSelection = playerSelection;
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
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

// Returns the winner of the round
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            if (computerSelection === 'PAPER') {
                return 'BOT';
            } else if (computerSelection === 'SCISSORS') {
                return 'USER';
            }
            break;
        case 'PAPER':
            if (computerSelection === 'SCISSORS') {
                return 'BOT';
            } else if (computerSelection === 'ROCK') {
                return 'USER';
            }
            break;
        case 'SCISSORS':
            if (computerSelection === 'ROCK') {
                return 'BOT';
            } else if (computerSelection === 'PAPER') {
                return 'USER';
            }
            break;
        default:
            return 'TIE';
    }
}

function updateText() {
    // TODO
}

function resetGame() {
    // TODO
}

// Grab document elements
const rockBtn = document.querySelectorAll(".rock");
const paperBtn = document.querySelectorAll(".paper");
const scissorsBtn = document.querySelectorAll(".scissors");
const resetBtn = document.getElementById("reset");

// Handle events
rockBtn.forEach(btn => btn.addEventListener('click', game('ROCK')));
paperBtn.forEach(btn => btn.addEventListener('click', game('PAPER')));
scissorsBtn.forEach(btn => btn.addEventListener('click', game('SCISSORS')));
resetBtn.addEventListener('click', resetGame);
