let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice;

    switch (num) {
        case 0:
            console.log('computer : rock');
            choice = 'rock';
            break;
        case 1:
            console.log('computer : paper');
            choice = 'paper';
            break;
        case 2:
            console.log('computer : scissor');
            choice = 'scissor';
            break;
        default:
            break;
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt('Input number here: ').toLowerCase();
    console.log('player: ', choice);
    return choice;
}



function playRoud(humanChoice, computerChoice) {
    const computer = getComputerChoice();
    const human = getHumanChoice();

    if (computer === 'scissor' && human === 'rock') {
        console.log('You Win!', human ," beats ", computer);
        humanScore++;
    } else if (computer === 'rock' && human === 'scissor') {
        console.log('You Lose!', computer ," beats ", human);
        computerScore++;
    } else if (computer === 'paper' && human === 'rock') {
        console.log('You Lose!', computer ," beats ", human);
        computerScore++;
    } else if (computer === 'rock' && human === 'paper') {
        console.log('You Win!', human ," beats ", computer);
        humanScore++;
    } else if (computer === 'scissor' && human === 'paper') {
        console.log('You Lose!', computer ," beats ", human);
        computerScore++;
    } else if (computer === 'paper' && human === 'scissor') {
        console.log('You Win!', human ," beats ", computer);
        humanScore++;
    } else if (computer === human) {
        console.log('It\'s a Tie!');
    } else {
        console.log('Invalid input. Please try again.');
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRoud();
    }

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('You are the overall winner!');
    } else if (computerScore > humanScore) {
        console.log('Computer is the overall winner!');
    } else {
        console.log('The game is a tie!');
    }
}

playGame();
