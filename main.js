const startGame = document.querySelector('.input');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const btn = document.querySelectorAll('button');

let win = 0;
let lose = 0;

function playRound(getPlayerChoice) {
    if (getPlayerChoice === 'rock') {
        if (getComputerChoice() === 'rock') {
            result.textContent = 'Draw';
        } else if (getComputerChoice() === 'paper') {
            lose ++;
            result.textContent = 'You lose';
        } else {
            win ++;
            result.textContent = 'You win';
        }
    } else if (getPlayerChoice === 'paper') {
        if (getComputerChoice() === 'rock') {
            win ++;
            result.textContent = 'You win';
        } else if (getComputerChoice() === 'paper') {
            result.textContent = 'Draw';
        } else {
            lose ++;
            result.textContent = 'You lose';
        }
    } else if (getPlayerChoice === 'scissor') {
        if (getComputerChoice() === 'rock') {
            lose ++;
            result.textContent = 'You lose';
        } else if (getComputerChoice() === 'paper') {
            win ++;
            result.textContent = 'You win';
        } else {
            result.textContent = 'Draw';
        }
    } else {
        result.textContent = "Please choose 'rock', 'paper' or 'scissor'";
    }

    score.textContent = `You - ${win} | ${lose} - Computer`
}

function getComputerChoice() {
    const rng = Math.floor(Math.random() * 3);
    if (rng === 0) {
        return 'rock';
    } else if (rng === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

btn.forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();

    const getPlayerChoice = e.target.textContent.toLowerCase();

    playRound(getPlayerChoice);
}));