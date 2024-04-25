const startGame = document.querySelector('.input');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

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
console.log(getComputerChoice())

startGame.addEventListener('submit', (e) => {
    e.preventDefault();
    const getPlayerChoice = e.target[0].value
})