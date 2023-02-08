let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let game = true;

function getComputerChoice () {
    // set computerChoice equal to a random number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);

    // return a string of rock, papper or scissors depending on computerChoice
    switch (computerChoice) {
        
        case 0:
            computerChoice = 'Rock';
            break;
        
        case 1:
            computerChoice = 'Paper';
            break;
        
        case 2:
            computerChoice = 'Scissors';
            break;
    }

    return computerChoice
}

function playRound(event) {

    // only go through this function if game is true

    if (game) {

        let computerChoice = getComputerChoice();

        let playerChoice = event.target.id;
        
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)

        console.log(`Player Choice: ${playerChoice} Computer Choice ${computerChoice}`)

        const GAME_STATUS = document.getElementById("game-status");

        const GAME_SCORE = document.getElementById("score");


        // conditions for rock
        if (playerChoice === 'Rock' && computerChoice === 'Rock'){
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Tie Game!`;
        } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Computer Wins!`;
            computerScore++;
        } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Player wins!`;
            playerScore++;
        }

        // conditions for paper
        if (playerChoice === 'Paper' && computerChoice === 'Paper'){
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Tie Game!`;
        } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Computer wins!`;
            computerScore++;
        } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Player wins!`;
            playerScore++;
        }

        // conditions for scissors
        if (playerChoice === 'Scissors' && computerChoice === 'Scissors'){
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Tie Game!`;
        } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Computer wins!`;
            computerScore++;
        } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
            GAME_STATUS.innerHTML = `Player chose: ${playerChoice} Computer chose ${computerChoice} Player wins!`;
            playerScore++;
        }

        GAME_SCORE.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;

        if (playerScore === 5) {
            GAME_STATUS.innerHTML = "Player reached 5 wins first! Player wins!";
            game = false;
        } else if (computerScore === 5) {
            GAME_STATUS.innerHTML = "Player reached 5 wins first! Computer wins!";
            game = false;
        }
    }
;} 


function mouseEnter(event) {
    event.target.classList.add("image-enter");
    const audio = document.getElementById("hover");
    audio.currentTime = 0;
    audio.play();

}

function mouseLeave(event) {
    event.target.classList.remove("image-enter");
}

document.getElementById("rock").addEventListener("mouseenter", mouseEnter);
document.getElementById("rock").addEventListener("mouseleave", mouseLeave);
document.getElementById("paper").addEventListener("mouseenter", mouseEnter);
document.getElementById("paper").addEventListener("mouseleave", mouseLeave);
document.getElementById("scissors").addEventListener("mouseenter", mouseEnter);
document.getElementById("scissors").addEventListener("mouseleave", mouseLeave);

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);