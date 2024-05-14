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

        if (choice !== 'pedra' && choice !== 'papel' && choice !== 'tesoura') {
            isChoiceValid = false;
        }

    } while (!isChoiceValid)

    return choice;
}

let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {

    if (computerChoice === humanChoice) {
        console.log(`Houve um empate. Ambos escolheram ${humanChoice}`);
        return;
    }
    
    switch (humanChoice) {
        case 'pedra':
            if (computerChoice === 'papel') {
                console.log(`O computador venceu essa rodada! ${computerChoice} enrola a ${humanChoice}`);
                computerScore++;
            }
            if (computerChoice === 'tesoura') {
                console.log(`Você venceu essa rodada! ${humanChoice} amassa a ${computerChoice}`);
                humanScore++;
            }    
            break;

        case 'papel':
            if (computerChoice === 'tesoura') {
                console.log(`O computador venceu essa rodada! ${computerChoice} corta o ${humanChoice}`);
                computerScore++;
            }
            if (computerChoice === 'pedra') {
                console.log(`Você venceu essa rodada! ${humanChoice} enrola a ${humanChoice}`);
                humanScore++;
            }
            break;

        case 'tesoura':
            if (computerChoice == 'pedra') {
                console.log(`O computador venceu essa rodada! ${computerChoice} amassa a ${humanChoice}`);
                computerScore++;
            }
            if (computerChoice == 'tesoura') {
                console.log(`Você venceu essa rodada! ${humanChoice} corta o ${computerChoice}`);
                humanScore++;
            }
            break;
    
        default:
            console.log('Erro inesperado, não era pra cair aqui');
            break;
    }
}

playRound(humanChoice, computerChoice);