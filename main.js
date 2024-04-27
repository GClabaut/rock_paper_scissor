const startGame = document.querySelector('.input');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const btn = document.querySelectorAll('button');

let win = 0;
let lose = 0;

function playRound(getPlayerChoice) {
    if (getPlayerChoice === 'rock') {
        if (getComputerChoice() === 'rock') {
            result.innerHTML = 'Draw';
        } else if (getComputerChoice() === 'paper') {
            lose ++;
            result.innerHTML = 'You lose';
        } else {
            win ++;
            result.innerHTML = 'You win';
        }
    } else if (getPlayerChoice === 'paper') {
        if (getComputerChoice() === 'rock') {
            win ++;
            result.innerHTML = 'You win';
        } else if (getComputerChoice() === 'paper') {
            result.innerHTML = 'Draw';
        } else {
            lose ++;
            result.innerHTML = 'You lose';
        }
    } else if (getPlayerChoice === 'scissor') {
        if (getComputerChoice() === 'rock') {
            lose ++;
            result.innerHTML = 'You lose';
        } else if (getComputerChoice() === 'paper') {
            win ++;
            result.innerHTML = 'You win';
        } else {
            result.innerHTML = 'Draw';
        }
    } else {
        result.innerHTML = "Please choose 'rock', 'paper' or 'scissor'";
    }

    score.innerHTML = `You - ${win} | ${lose} - Computer`
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