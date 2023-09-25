

// COMPUTER'S CHOICE
function getComputerChoice() {
    random = Math.floor(Math.random() * 3) + 1;

    if(random == 1) {
        let choice = 'Paper';
        return choice;
    }else if(random == 2) {
        let choice = 'Rock';
        return choice;
    }else if(random == 3) {
        let choice = 'Scissors';
        return choice;
    }
}

// SINGLE ROUND
function playRound(playerSelection, computerSelection) {

    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        let result = 'You lose! Paper beats Rock!'
        return result;
    }else if(playerSelection == 'Rock' && computerSelection == 'Scissors') {
        let result = 'You Win! Rock beats Scissors!';
        return result;
    }else if(playerSelection == 'Rock' && computerSelection == 'Rock') {
        let result = 'Draw!';
        return result;
    }else if(playerSelection == 'Paper' && computerSelection == 'Rock') {
        let result = 'You win! Paper beats Rock!';
        return result;
    }else if(playerSelection == 'Paper' && computerSelection == 'Scissors') {
        let result = 'You lose! Scissors beats Paper!';
        return result;
    }else if(playerSelection == 'Paper' && computerSelection == 'Paper') {
        let result = 'Draw!';
        return result;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Paper') {
        let result = 'You win! Scissors beats Paper!';
        return result;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Rock') {
        let result = 'You lose! Rock beats Scissors!';
        return result;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        let result = 'Draw!';
        return result;
    }

}


// 5 ROUND GAME FUNCTION
function game() {

    // DECLARING VARIABLES
    const computerSelection = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;

            for(i = 0; i < 5; i++) {
                const playerSelection = prompt('Select your choice: ');
                let round = playRound(playerSelection, computerSelection);

                //SCORE 
                if(round == 'You win! Rock beats Scissors!' || round == 'You win! Paper beats Rock!' || round == 'You win! Scissors beats Paper!') {
                    playerScore += 1;
                }else if(round == 'You lose! Paper beats Rock!' || round == 'You lose! Scissors beats Paper!' || round == 'You lose! Rock beats Scissors!'){
                    computerScore += 1;
                };

                let score = round + '  Player has: ' + playerScore + ' points /// '+ 'Computer has: ' + computerScore + ' points.'

                console.log(score);
               

            }

}

