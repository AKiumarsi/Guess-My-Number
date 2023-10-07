'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;
const scoreContent = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');

  if (!guessValue) {
    message.textContent = 'no number';
  } else if (guessValue === secretNumber) {
    message.textContent = 'correct number';
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      message.textContent = 'too high';
      score--;
      scoreContent.textContent = score;
    } else {
      message.textContent = 'you lose';
      score = 0;
      scoreContent.textContent = score;
    }
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      message.textContent = 'tot low';
      score--;
      scoreContent.textContent = score;
    } else {
      message.textContent = 'you lose';
      score = 0;
      scoreContent.textContent = score;
    }
  }
});
