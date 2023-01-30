let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function getComputerChoice () {
    // set computerChoice equal to a random number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);

    // return a string of rock, papper or scissors depending on computerChoice
    switch (computerChoice) {
        
        case 0:
            computerChoice = 'rock';
            break;
        
        case 1:
            computerChoice = 'paper';
            break;
        
        case 2:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice
}

function gameRound(playerChoice, computerChoice) {

    // conditions for rock
    if (playerChoice === 'rock' && computerChoice === 'rock'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }

    // conditions for paper
    if (playerChoice === 'paper' && computerChoice === 'paper'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }

    // conditions for scissors
    if (playerChoice === 'scissors' && computerChoice === 'scissors'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }
;}


while (gamesPlayed < 5) {

    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        alert(gameRound(playerChoice, computerChoice));
        gamesPlayed++;  
    } else {
        alert("Please enter either rock, paper or scissors.");
    } 
}

if (playerScore > computerScore) {
    alert(`Player wins with a score of ${playerScore} - ${computerScore}`);
} else if (computerScore > playerScore) {
    alert(`Computer wins with a score of ${computerScore} - ${playerScore}`);
} else {
    alert(`The game is tied ${playerScore} - ${computerScore}`)
}
