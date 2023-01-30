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

console.log(getComputerChoice());