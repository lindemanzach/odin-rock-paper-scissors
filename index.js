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
    console.log(`Player: ${playerChoice} Computer: ${computerChoice}`);

    // conditions for rock
    if (playerChoice === 'rock' && computerChoice === 'rock'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }

    // conditions for paper
    if (playerChoice === 'paper' && computerChoice === 'paper'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }

    // conditions for scissors
    if (playerChoice === 'scissors' && computerChoice === 'scissors'){
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Tie game!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Computer wins!`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return `Player chooses ${playerChoice}. Computer chooses ${computerChoice}. Player wins!`;
    }
;}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();

if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    console.log(gameRound(playerChoice, computerChoice));  
} else {
    alert("Please enter either rock, paper or scissors.");
}