// ALL-AROUND VARIABLES

let playerScore = 0;
let computerScore = 0;
const messageContainer = document.querySelector('.message');

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

    let playerWin = 'You win! ' + playerSelection + ' beats ' + computerSelection + ' !';
    let computerWin = 'You lose! ' + computerSelection + ' beats ' + playerSelection + ' !';
    let draw = 'Draw';

    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore += 1;
        return computerWin;
    }else if(playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore += 1;
        return playerWin;
    }else if(playerSelection == 'Rock' && computerSelection == 'Rock') {
       return draw;
    }else if(playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore += 1;
        return playerWin;
    }else if(playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore += 1;
        return computerWin;
    }else if(playerSelection == 'Paper' && computerSelection == 'Paper') {
        return draw;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore += 1;
        return playerWin;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore += 1;
        return computerWin;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return draw;
    }

}



// GAME FUNCTION 

function game(choice) {
    if(playerScore < 5 && computerScore < 5) {
        let playerSelection = choice;
        const computerSelection = getComputerChoice();
        let roundText = playRound(playerSelection, computerSelection);
        document.getElementById("win-message").textContent = roundText;
        document.getElementById("playerScore").textContent = 'Player score: ' + playerScore;
        document.getElementById("computerScore").textContent = 'Computer score: ' + computerScore;
    }

    if(playerScore == 5) {
        document.getElementById('win-message').textContent = 'You beat the Computer!';
    }
    if (computerScore == 5) {
        document.getElementById('win-message').textContent = 'Beep Boop! The Computer Wins The Game!!';
}

}

// adding event listeners to buttons
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');


rockButton.addEventListener('click', () => {
    game('Rock');
});

paperButton.addEventListener('click', () => {
    game('Paper');
});

scissorsButton.addEventListener('click', () => {
    game('Scissors');
});

               
  //SCORE 
  /*
  if(result == 'You win! Rock beats Scissors!' || result == 'You win! Paper beats Rock!' || result == 'You win! Scissors beats Paper!') {
    playerScore += 1;
}else if(result == 'You lose! Paper beats Rock!' || result == 'You lose! Scissors beats Paper!' || result == 'You lose! Rock beats Scissors!'){
    computerScore += 1;
};

let score = result + '  Player has: ' + playerScore + ' points /// '+ 'Computer has: ' + computerScore + ' points.'

console.log(score);

*/
