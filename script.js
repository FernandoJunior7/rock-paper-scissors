const elements = ["pedra", "papel", "tesoura"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = elements[getComputerChoice()];

function getHumanChoice() {
    let isChoiceValid;
    let choice;

    do {
        isChoiceValid = true;
        choice = prompt('O - Pedra, 1 - Papel, 2 - Tesoura');

        if (choice < 0 || choice > 2) {
            isChoiceValid = false;
        }

    } while (!isChoiceValid)

    return choice;
}

let humanChoice = getHumanChoice();