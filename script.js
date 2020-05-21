// Grab interactive text elements
const roundNum = document.getElementById('round');
const userScore = document.querySelector('.user');
const botScore = document.querySelector('.bot');
const battleground = document.getElementById('result-text');
const rockIcon = document.getElementById('rock-icon');
const paperIcon = document.getElementById('paper-icon');
const scissorsIcon = document.getElementById('scissors-icon');

// Initialize global variables
let userWins = 0;
let botWins = 0;
let round = 1;
let userColorState = {
    'ROCK': false,
    'PAPER': false,
    'SCISSORS': false
}
let botColorState = {
    'ROCK': false,
    'PAPER': false,
    'SCISSORS': false
}
let tieColorState = {
    'ROCK': false,
    'PAPER': false,
    'SCISSORS': false
}

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

  updateText(winner, playerSelection, computerSelection);
  updateColorState(playerSelection, computerSelection);
  updateColors();

  if (round === 5) endGame();
}

// Returns computer's response
function computerPlay() {
  let computerSelection = 'ROCK';
  const n = Math.random();
  if (n <= 1 / 3) {
    computerSelection = 'PAPER';
  } else if (n > 1 / 3 && n <= 2 / 3) {
    computerSelection = 'SCISSORS';
  }
  return computerSelection;
}

// Returns the winner of the round and updates round number
function playRound(playerSelection, computerSelection) {
  round++;
  roundNum.textContent = round;

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
    battleground.textContent = userWinText;
  } else if (winner === 'BOT') {
    botWins++;
    battleground.textContent = botWinText;
  } else {
    battleground.textContent = tieText;
  }
  userScore.textContent = userWins.toString();
  botScore.textContent = botWins.toString();
}

// Update the state of colors
function updateColorState(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection) {
        for (weapon in userColorState) {
            if (weapon === playerSelection) {
                userColorState[weapon] = true;
            } else {
                userColorState[weapon] = false;
            }
        }
        for (weapon in botColorState) {
            if (weapon === computerSelection) {
                botColorState[weapon] = true;
            } else {
                botColorState[weapon] = false;
            }
        }
        for (weapon in tieColorState) {
            tieColorState[weapon] = false;
        }
    } else {
        for (weapon in tieColorState) {
            if (weapon === playerSelection) {
                tieColorState[weapon] = true;
            } else {
                tieColorState[weapon] = false;
            }
        }
        for (weapon in userColorState) {
            userColorState[weapon] = false;
        }
        for (weapon in botColorState) {
            botColorState[weapon] = false;
        }
    }
}

// Update the colors in the document
function updateColors() {
  // Rock-icon color
  userColorState['ROCK'] ? rockIcon.classList.add('user-color') : rockIcon.classList.remove('user-color');
  botColorState['ROCK'] ? rockIcon.classList.add('bot-color') : rockIcon.classList.remove('bot-color');
  tieColorState['ROCK'] ? rockIcon.classList.add('tie-color') : rockIcon.classList.remove('tie-color');
  // Paper-icon color
  userColorState['PAPER'] ? paperIcon.classList.add('user-color') : paperIcon.classList.remove('user-color');
  botColorState['PAPER'] ? paperIcon.classList.add('bot-color') : paperIcon.classList.remove('bot-color');
  tieColorState['PAPER'] ? paperIcon.classList.add('tie-color') : paperIcon.classList.remove('tie-color');
  // Scissors-icon color
  userColorState['SCISSORS'] ? scissorsIcon.classList.add('user-color') : scissorsIcon.classList.remove('user-color');
  botColorState['SCISSORS'] ? scissorsIcon.classList.add('bot-color') : scissorsIcon.classList.remove('bot-color');
  tieColorState['SCISSORS'] ? scissorsIcon.classList.add('tie-color') : scissorsIcon.classList.remove('tie-color');
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
const rockBtns = document.querySelectorAll('.rock');
const paperBtns = document.querySelectorAll('.paper');
const scissorsBtns = document.querySelectorAll('.scissors');
const resetBtn = document.getElementById('reset');

// Handle button events
rockBtns.forEach((btn) => btn.addEventListener('click', game('ROCK')));
paperBtns.forEach((btn) => btn.addEventListener('click', game('PAPER')));
scissorsBtns.forEach((btn) => btn.addEventListener('click', game('SCISSORS')));
resetBtn.addEventListener('click', resetGame);
