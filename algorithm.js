function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    randomNumber = getRandomIntInclusive();
    if (randomNumber == 1) {
        return "rock";
} else if (randomNumber == 2) {
    return "paper";
} else {
    return "scissors";
}
}
function getPlayerChoice() {
    playerChoice = prompt("Choose your hand");
    playerSelection = playerChoice.toLowerCase();
    return playerSelection;
}


computerSelection = getComputerChoice();

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock!";
} else if (playerSelection === "paper" && computerSelection === "rock"){
    return "You Win! Paper beats Rock!";
} else if (playerSelection === "paper" && computerSelection === "paper"){
    return "Draw!";
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    return "You Lose! Scissors beats Paper!";
} else if (playerSelection === "scissors" && computerSelection === "paper"){
    return "You Win! Scissors beats Paper!";
} else if (playerSelection === "scissors" && computerSelection === "scissors"){
    return "Draw!";
} else {
    return "You Lose! Rock beats Scissors!";
}}
console.log(getComputerChoice())
console.log(gameRound(playerSelection, computerSelection))
