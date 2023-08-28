'use strict';

// document.querySelector('.message').textContent = '🏆 Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; // secret number

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // When there is no input
    // guess = true; !guess = False. If !guess empty, change the text
    // document.querySelector('.message').textContent = '⛔ No number! ';
    displayMessage('⛔ No number! ');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct number!';
    displayMessage('🏆 Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high' : '📉Too low';
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score = score - 1; // score--
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😒 You lost the game';
      displayMessage('😒 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high';
  //     score = score - 1; // score--
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low';
  //     score = score - 1; // score--
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
