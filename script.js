// Initialize global variables
let userWins = 0;
let botWins = 0;
let round = 1;

// Strings printed during the game
const userWinText = `You WIN! ${playerSelection} beats ${computerSelection}`;
const botWinText = `You LOSE! ${computerSelection} beats ${playerSelection}`;
const tieText = "It's a TIE! Try again!";
const gameOverText = 'GAME OVER. Make a move to play a new round!';

// Play the game
function game(playerSelection) {
    if (round === 5) resetGame();

    let playerSelection = playerSelection;
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    updateText(winner);

    if (round === 5) endGame();
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
    round++;
    // TODO: update round text

    switch (playerSelection) {
        case 'ROCK':
            if (computerSelection === 'PAPER') {
                return 'BOT';
            } else if (computerSelection === 'SCISSORS') {
                return 'USER';
            }
        case 'PAPER':
            if (computerSelection === 'SCISSORS') {
                return 'BOT';
            } else if (computerSelection === 'ROCK') {
                return 'USER';
            }
        case 'SCISSORS':
            if (computerSelection === 'ROCK') {
                return 'BOT';
            } else if (computerSelection === 'PAPER') {
                return 'USER';
            }
        default:
            return 'TIE';
    }
}

// Update the battleground text
function updateText(winner) {
    if (winner === 'USER') {
        userWins++;
        // TODO: Change text
    } else if (winner === 'BOT') {
        botWins++;
        // TODO: Change text
    } else {
        // TODO: Change text
    }
}

// Reset the game 
function resetGame() {
    // TODO
}

// Ends the game
function endGame() {
    // TODO
}

// Grab button elements
const rockBtns = document.querySelectorAll(".rock");
const paperBtns = document.querySelectorAll(".paper");
const scissorsBtns = document.querySelectorAll(".scissors");
const resetBtn = document.getElementById("reset");

// Handle button events
rockBtns.forEach(btn => btn.addEventListener('click', game('ROCK')));
paperBtns.forEach(btn => btn.addEventListener('click', game('PAPER')));
scissorsBtns.forEach(btn => btn.addEventListener('click', game('SCISSORS')));
resetBtn.addEventListener('click', resetGame);

// Grab interactive text elements
