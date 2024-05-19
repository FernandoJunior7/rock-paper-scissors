const elements = ["pedra", "papel", "tesoura"];

const buttonsContainer = document.querySelector('#player-buttons');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultMessageDisplay = document.querySelector('#result-message');

let humanScore = 0;
let computerScore = 0;

function getRandomNumberBetweenZeroAndTwo() {
    return Math.floor(Math.random() * 3);
}

function updateScorings(humanScore, computerScore) {
    humanScoreDisplay.textContent = Number(humanScore);
    computerScoreDisplay.textContent = Number(computerScore);
}

function updateResultMessage(message) {
    resultMessageDisplay.textContent = message;
}

function playRound(humanChoice, computerChoice) {

    let message;

    if (computerChoice === humanChoice) {
        message = `Houve um empate. Ambos escolheram ${humanChoice}`;
        return;
    }
    
    switch (humanChoice) {
        case 'pedra':
            if (computerChoice === 'papel') {
                message = `O computador venceu essa rodada! ${computerChoice} enrola a ${humanChoice}`;
                computerScore++;
            }
            if (computerChoice === 'tesoura') {
                message = `Você venceu essa rodada! ${humanChoice} amassa a ${computerChoice}`;
                humanScore++;
            }    
            break;

        case 'papel':
            if (computerChoice === 'tesoura') {
                message = `O computador venceu essa rodada! ${computerChoice} corta o ${humanChoice}`;
                computerScore++;
            }
            if (computerChoice === 'pedra') {
                message = `Você venceu essa rodada! ${humanChoice} enrola a ${humanChoice}`;
                humanScore++;
            }
            break;

        case 'tesoura':
            if (computerChoice == 'pedra') {
                message = `O computador venceu essa rodada! ${computerChoice} amassa a ${humanChoice}`;
                computerScore++;
            }
            if (computerChoice == 'tesoura') {
                message = `Você venceu essa rodada! ${humanChoice} corta o ${computerChoice}`;
                humanScore++;
            }
            break;
    
        default:
            message = 'Erro inesperado, não era pra cair aqui';
            break;
    }

    updateScorings(humanScore, computerScore);
    updateResultMessage(message);
}

function playGame() {
    let humanChoice, computerChoice;

    for (i = 0; i < 5; i ++) {
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        console.log(`O computador te deu um pau! ${computerScore} x ${humanScore} fora o baile`)
    }
    if (humanScore > computerScore) {
        console.log(`Você deu um pau no computador! ${humanScore} x ${computerScore} fora o baile`)
    }
    if (humanScore === computerScore) {
        console.log(`Vocês empataram em ${humanScore} x ${computerScore}`);
    }
}

buttonsContainer.addEventListener('click', event => {
    const humanChoice = event.target.id;
    const computerChoice = elements[getRandomNumberBetweenZeroAndTwo()];
    playRound(humanChoice, computerChoice);
});

// playGame();