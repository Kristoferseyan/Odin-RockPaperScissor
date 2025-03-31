let humanScore = 0;
let computerScore = 0;
let totalScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    if (totalScore >= 5) {
        console.log('Game finished!');
        console.log(humanScore > computerScore ? 'You won the game!' : 'You lose, computer wins!');
        return;
    }

    const computerChoice = getComputerChoice();
    console.log('Computer:', computerChoice);
    
    const winConditions = {
        rock: 'scissor',
        paper: 'rock',
        scissor: 'paper'
    };

    if (playerChoice === computerChoice) {
        console.log("It's a Tie!");
    } else if (winConditions[playerChoice] === computerChoice) {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        totalScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
        totalScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", e => playRound(e.target.textContent.toLowerCase()));
});
