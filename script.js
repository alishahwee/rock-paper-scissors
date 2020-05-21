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
let round = 0;
let userColorState = {
  ROCK: false,
  PAPER: false,
  SCISSORS: false,
};
let botColorState = {
  ROCK: false,
  PAPER: false,
  SCISSORS: false,
};
let tieColorState = {
  ROCK: false,
  PAPER: false,
  SCISSORS: false,
};

// Play the game
function game(playerSelect) {
  if (round === 5) resetGame();

  let playerSelection = playerSelect;
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
  roundNum.textContent = `ROUND ${round}`;
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

// Update the battleground text
function updateText(winner, playerSelection, computerSelection) {
  // Strings printed during the game
  const userWinText = `You WIN! ${playerSelection} beats ${computerSelection}.`;
  const botWinText = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
  const tieText = "It's a TIE! Try again!";

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
  userColorState['ROCK']
    ? rockIcon.classList.add('user-color')
    : rockIcon.classList.remove('user-color');
  botColorState['ROCK']
    ? rockIcon.classList.add('bot-color')
    : rockIcon.classList.remove('bot-color');
  tieColorState['ROCK']
    ? rockIcon.classList.add('tie-color')
    : rockIcon.classList.remove('tie-color');
  // Paper-icon color
  userColorState['PAPER']
    ? paperIcon.classList.add('user-color')
    : paperIcon.classList.remove('user-color');
  botColorState['PAPER']
    ? paperIcon.classList.add('bot-color')
    : paperIcon.classList.remove('bot-color');
  tieColorState['PAPER']
    ? paperIcon.classList.add('tie-color')
    : paperIcon.classList.remove('tie-color');
  // Scissors-icon color
  userColorState['SCISSORS']
    ? scissorsIcon.classList.add('user-color')
    : scissorsIcon.classList.remove('user-color');
  botColorState['SCISSORS']
    ? scissorsIcon.classList.add('bot-color')
    : scissorsIcon.classList.remove('bot-color');
  tieColorState['SCISSORS']
    ? scissorsIcon.classList.add('tie-color')
    : scissorsIcon.classList.remove('tie-color');
}

// Reset the game
function resetGame() {
  userWins = 0;
  botWins = 0;
  round = 0;

  roundNum.textContent = `ROUND 1`;
  userScore.textContent = userWins.toString();
  botScore.textContent = botWins.toString();
  battleground.textContent = 'Pick your weapon!';
  for (weapon in userColorState) {
    userColorState[weapon] = false;
  }
  for (weapon in botColorState) {
    botColorState[weapon] = false;
  }
  for (weapon in tieColorState) {
    tieColorState[weapon] = false;
  }
  updateColors();
}

// Ends the game
function endGame() {
  let result;
  if (userWins > botWins) {
    result = 'YOU WIN!';
  } else if (botWins > userWins) {
    result = 'YOU LOSE!';
  } else result = "IT'S A TIE!";
  battleground.textContent = `GAME OVER. ${result} Make a move to play again!`;
}

// Grab button elements
const rockBtns = document.querySelectorAll('.rock');
const paperBtns = document.querySelectorAll('.paper');
const scissorsBtns = document.querySelectorAll('.scissors');
const resetBtn = document.getElementById('reset');

// Handle button events
rockBtns.forEach((btn) => btn.addEventListener('click', (e) => game('ROCK')));
paperBtns.forEach((btn) => btn.addEventListener('click', (e) => game('PAPER')));
scissorsBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => game('SCISSORS'))
);
resetBtn.addEventListener('click', resetGame);
