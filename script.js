const elements = ["pedra", "papel", "tesoura"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = elements[getComputerChoice()];

console.log(computerChoice);