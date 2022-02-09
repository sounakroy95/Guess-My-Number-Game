'use strict';

// Remember that DOM is part of Web APIs and they are not part of the JS , they are features which when used with JS helps us build websites.
/*
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // These variables are also called a state variables because they are part of the application.

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When player does not enter a proper number:

  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number⛔. Please input number between 1 and 20!';

    // When player wins!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When player guess is too high!
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥You lost the game. Try again!🎮';
      document.querySelector('.score').textContent = 0;
    }

    // When player guess too low!
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥You lost the game. Try again!🎮';
      document.querySelector('.score').textContent = 0;
    }
  }
});
