const startGame = document.querySelector('.input');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

let win = 0;
let lose = 0;

function playRound(getPlayerChoice) {
    if (getPlayerChoice === 'rock') {
        if (getComputerChoice() === 'rock') {
            const resultTxt = 'Draw';
            result.innerHTML = resultTxt;
        } else if (getComputerChoice() === 'paper') {
            const resultTxt = 'You lose';
            lose ++;
            result.innerHTML = resultTxt;
        } else {
            const resultTxt = 'You win';
            win ++;
            result.innerHTML = resultTxt;
        }
    } else if (getPlayerChoice === 'paper') {
        if (getComputerChoice() === 'rock') {
            const resultTxt = 'You win';
            win ++;
            result.innerHTML = resultTxt;
        } else if (getComputerChoice() === 'paper') {
            const resultTxt = 'Draw';
            result.innerHTML = resultTxt;
        } else {
            const resultTxt = 'You lose';
            lose ++;
            result.innerHTML = resultTxt;
        }
    } else if (getPlayerChoice === 'scissor') {
        if (getComputerChoice() === 'rock') {
            const resultTxt = 'You lose';
            lose ++;
            result.innerHTML = resultTxt;
        } else if (getComputerChoice() === 'paper') {
            const resultTxt = 'You win';
            win ++;
            result.innerHTML = resultTxt;
        } else {
            const resultTxt = 'Draw';
            result.innerHTML = resultTxt;
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

startGame.addEventListener('submit', (e) => {
    e.preventDefault();

    const getPlayerChoice = e.target[0].value.toLowerCase();

    playRound(getPlayerChoice);

})