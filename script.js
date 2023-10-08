'use strict';

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
let secretNumber = randomNumber(1, 20);
let score = 20;
let highScore = 0;
const scoreContent = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');

  if (!guessValue) {
    message.textContent = 'no number';
  } else if (guessValue === secretNumber) {
    message.textContent = 'correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
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

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = randomNumber(1, 20);
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing ...';
  score = 20;
  scoreContent.textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '15rem';
});
