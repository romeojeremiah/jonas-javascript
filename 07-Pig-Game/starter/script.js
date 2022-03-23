'use strict';
//select players output screen
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

//select players total score display
let player1TotalDisplay = document.querySelector('#score--0');
let player2TotalDisplay = document.querySelector('#score--1');

//select players current score display
let player1CurrentDisplay = document.querySelector('#current--0');
let player2CurrentDisplay = document.querySelector('#current--1');

//set start totals to 0
let player1TotalScore = 0;
let player2TotalScore = 0;
player1TotalDisplay.textContent = player1TotalScore;
player2TotalDisplay.textContent = player2TotalScore;

//set start current scores to 0
let player1CurrentScore = 0;
let player2CurrentScore = 0;
player1CurrentDisplay.textContent = player1CurrentScore;
player2CurrentDisplay.textContent = player2CurrentScore;

/***** START GAME ********/

/****** EVENT LISTENERS **********/
//set up roll and roll dice button
const rollDiceBtn = document.querySelector('.btn--roll');
rollDiceBtn.addEventListener('click', function () {
  let diceNumber = rollDice();
  processRoll(diceNumber);
});

//set up hold button
const holdBtn = document.querySelector('.btn--hold');
holdBtn.addEventListener('click', function () {
  processCurrentScore();
});

// set up new game button
const newBtn = document.querySelector('.btn--new');
newBtn.addEventListener('click', startNewGame);

// set up winner flag
let isWinner = false;

/***********FUNCTIONS**********/

function startNewGame() {
  //set start totals to 0
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1TotalDisplay.textContent = player1TotalScore;
  player2TotalDisplay.textContent = player2TotalScore;

  //set start current scores to 0
  let player1CurrentScore = 0;
  let player2CurrentScore = 0;
  player1CurrentDisplay.textContent = player1CurrentScore;
  player2CurrentDisplay.textContent = player2CurrentScore;

  isWinner = false;
  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player-active');
  }
}

function checkIfWinner(score) {
  if (score >= 100) {
    return true;
  } else {
    return false;
  }
}

function processCurrentScore() {
  if (player1.classList.contains('player--active')) {
    player1TotalScore += player1CurrentScore;
    player1TotalDisplay.textContent = player1TotalScore;
    isWinner = checkIfWinner(player1TotalScore);
    if (isWinner) {
      player1.classList.add('player--winner');
    } else {
      player1CurrentScore = 0;
      player1CurrentDisplay.textContent = player1CurrentScore;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else if (player2.classList.contains('player--active')) {
    player2TotalScore += player2CurrentScore;
    player2TotalDisplay.textContent = player2TotalScore;
    isWinner = checkIfWinner(player2TotalScore);
    if (isWinner) {
      player2.classList.add('player--winner');
    } else {
      player2CurrentScore = 0;
      player2CurrentDisplay.textContent = player2CurrentScore;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
}

function processRoll(diceNumber) {
  if (diceNumber === 1) {
    //reset current players score to 0
    //switch player
    if (player1.classList.contains('player--active')) {
      player1CurrentScore = 0;
      player1CurrentDisplay.textContent = player1CurrentScore;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (player2.classList.contains('player--active')) {
      player2CurrentScore = 0;
      player2CurrentDisplay.textContent = player2CurrentScore;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  } else if (player1.classList.contains('player--active')) {
    player1CurrentScore += diceNumber;
    player1CurrentDisplay.textContent = player1CurrentScore;
  } else if (player2.classList.contains('player--active')) {
    player2CurrentScore += diceNumber;
    player2CurrentDisplay.textContent = player2CurrentScore;
  }
}

function rollDice() {
  let roll = Math.ceil(Math.random() * 6);

  //output dice img on screen
  let image = document.querySelector('.dice');
  let src = '';

  switch (roll) {
    case 1:
      src = './dice-1.png';
      break;
    case 2:
      src = './dice-2.png';
      break;
    case 3:
      src = './dice-3.png';
      break;
    case 4:
      src = './dice-4.png';
      break;
    case 5:
      src = './dice-5.png';
      break;
    case 6:
      src = './dice-6.png';
      break;
  }
  image.setAttribute('src', `${src}`);
  return roll;
}
