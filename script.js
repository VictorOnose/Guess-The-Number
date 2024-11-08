'use strict';

let secretNumber = Math.trunc(Math.random() * 1000 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low! :('
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game! :((';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high! :('
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game! :((';
            document.querySelector('.score').textContent = 0;
        }

    }
});
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 1000 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    console.log(secretNumber);
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})