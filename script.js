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
        return "Tie";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();