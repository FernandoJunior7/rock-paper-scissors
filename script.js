const elements = ["pedra", "papel", "tesoura"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = elements[getComputerChoice()];

function getHumanChoice() {
    let isChoiceValid;
    let choice;

    do {
        isChoiceValid = true;
        choice = prompt('Pedra, Papel ou Tesoura?').toLowerCase();

        console.log(choice === 'pedra');

        if (choice !== 'pedra' && choice !== 'papel' && choice !== 'tesoura') {
            isChoiceValid = false;
        }

        console.log(`Choice: ${choice}`);
        console.log(`isChoiceValid: ${isChoiceValid}`);

    } while (!isChoiceValid)

    return choice;
}

let humanChoice = getHumanChoice();