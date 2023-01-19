function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Rock is beaten by Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Scissors is beaten by Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Paper is beaten by Scissors";
    }
    else {
        return "Tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const body = document.querySelector('body');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const result = document.createElement('div');
    const player = document.createElement('div');
    const computer = document.createElement('div');
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    body.appendChild(player);
    body.appendChild(computer);
    body.appendChild(result);
    rock.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
        }
        let temp = playRound(rock.getAttribute('id'), getComputerChoice());
        if (temp.includes('You Win')) {
            ++playerScore;
        }
        else if (temp.includes('You Lose')) {
            ++computerScore;
        }
        if (playerScore == 5) {
            player.textContent = `Player Score: ${playerScore}`;
            alert('You won the series!');
        }
        if (computerScore == 5) {
            computer.textContent = `Computer Score: ${computerScore}`;
            alert('The Computer won the series!');
        }
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        result.textContent = temp;
    });
    paper.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
        }
        let temp = playRound(paper.getAttribute('id'), getComputerChoice());
        if (temp.includes('You Win')) {
            ++playerScore;
        }
        else if (temp.includes('You Lose')) {
            ++computerScore;
        }
        if (playerScore == 5) {
            player.textContent = `Player Score: ${playerScore}`;
            alert('You won the series!');
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore == 5) {
            computer.textContent = `Computer Score: ${computerScore}`;
            alert('The Computer won the series!');
            playerScore = 0;
            computerScore = 0;
        }
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        result.textContent = temp;
    });
    scissors.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
        }
        let temp = playRound(scissors.getAttribute('id'), getComputerChoice());
        if (temp.includes('You Win')) {
            ++playerScore;
        }
        else if (temp.includes('You Lose')) {
            ++computerScore;
        }
        if (playerScore == 5) {
            player.textContent = `Player Score: ${playerScore}`;
            alert('You won the series!');
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore == 5) {
            computer.textContent = `Computer Score: ${computerScore}`;
            alert('The Computer won the series!');
            playerScore = 0;
            computerScore = 0;
        }
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        result.textContent = temp;
    });
}
game();