'use strict';

// Remember that DOM is part of Web APIs and they are not part of the JS , they are features which when used with JS helps us build websites.
/*
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // These variables are also called a state variables because they are part of the application.
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When player does not enter a proper number:

  if (!guess) {
    displayMessage('No Number⛔!');

    // When player wins!
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game. Try again!🎮');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When player guess is too high!
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMessage('📈 Too high!');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('💥You lost the game. Try again!🎮');
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // When player guess too low!
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMessage('📉 Too low!');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('💥You lost the game. Try again!🎮');
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Resetting the game using Again button:

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
