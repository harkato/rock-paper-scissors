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

let playerCount = 0;
let computerCount = 0;

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ["You Win! Rock beats Scissors!", playerCount = true, computerCount = false];
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
        return ["Draw!", playerCount = false, computerCount = false];
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return ["You Lose! Paper beats Rock!", playerCount = false, computerCount = true];
} else if (playerSelection === "paper" && computerSelection === "rock"){
    return ["You Win! Paper beats Rock!", playerCount= true, computerCount = false];
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    return ["You Lose! Scissors beats Paper!", playerCount = false, computerCount = true];
} else if (playerSelection === "scissors" && computerSelection === "paper"){
    return ["You Win! Scissors beats Paper!", playerCount = true, computerCount = false];
} else {
    return ["You Lose! Rock beats Scissors!", playerCount = false, computerCount = true];
}}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let [result, pCount, cCount] = gameRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        playerCount = pCount;
        computerCount = cCount;
        if (playerCount === true && computerCount === false) {
            ++playerScore;
        } else if (playerCount === false && computerCount === true) {
            ++computerScore;
        }
    }
    return "End of game";
}

console.log(game());
if (playerScore>computerScore) {
    console.log("Congratulations! You Win!");
} else {
    console.log("You lose!")
}
console.log("Your final score: " + playerScore)
console.log("Computer final score: " + computerScore);