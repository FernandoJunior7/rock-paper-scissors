const elements = ["pedra", "papel", "tesoura"];
const buttonsContainer = document.querySelector('#player-buttons');
let humanScore = 0;
let computerScore = 0;

function getRandomNumberBetweenZeroAndTwo() {
    return Math.floor(Math.random() * 3);
}

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