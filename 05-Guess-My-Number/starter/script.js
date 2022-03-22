'use strict';

//select replay 'again' button
const again = document.querySelector('.again');
//select winning score result
const number = document.querySelector('.number');
//select check button
const check = document.querySelector('.check');
//select input box
let guessInput = document.querySelector('.guess');
//select message
const message = document.querySelector('.message');
//select score
const score = document.querySelector('.score');
//select highscore
const highScore = document.querySelector('.highscore');
//select guess range
const between = document.querySelector('.between');

//set a random number between 1 and 20
let randomNumber = Math.ceil(Math.random() * 20);
//set initial score value
let scoreNumber = setScore();
let highScoreNumber = 0;
between.textContent = `(Between 1 and ${scoreNumber})`;

//get guess from user
check.addEventListener('click', playGame);

//reset game
again.addEventListener('click', resetGame);

//****Functions****/

function setScore() {
  return (score.textContent = 10);
}
function displayHighScore() {
  if (scoreNumber > highScoreNumber) {
    highScoreNumber = scoreNumber;
  }
  highScore.textContent = highScoreNumber;
}

function changeScore(messageString) {
  message.textContent = messageString;
  scoreNumber -= 1;
  score.textContent = scoreNumber;
  if (scoreNumber === 0) {
    message.textContent = 'You Lose! Try Again!';
    check.disabled = true;
  }
}

function resetGame() {
  randomNumber = Math.ceil(Math.random() * 20);
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guessInput.value = '';
  scoreNumber = setScore();
  score.textContent = scoreNumber;
  check.disabled = false;
  document.body.style.backgroundColor = '#222';
}

function playGame() {
  let userGuess = Number(guessInput.value);
  if (userGuess < 0 || userGuess > 20) {
    //display warning message
    message.textContent = 'Invalid guess!';
  } else if (userGuess === randomNumber) {
    message.textContent = 'winner!';
    document.body.style.backgroundColor = `#60b347`;
    number.textContent = userGuess;
    check.disabled = true;
    displayHighScore();
  } else if (userGuess < randomNumber) {
    changeScore('too low!');
  } else if (userGuess > randomNumber) {
    changeScore('too high!');
  }
}
