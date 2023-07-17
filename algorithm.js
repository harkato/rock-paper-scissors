
let playerCount = 0;
let computerCount = 0;
let playerScore = 0; computerScore = 0;
const results = document.getElementById("results");

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


function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent="You Win! Rock beats Scissors!";
        return [playerCount = true, computerCount = false];
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
        results.textContent="Draw!";
        return [playerCount = false, computerCount = false];
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        results.textContent="You Lose! Paper beats Rock!";
        return [playerCount = false, computerCount = true];
} else if (playerSelection === "paper" && computerSelection === "rock"){
    results.textContent="You Win! Paper beats Rock!";
    return [playerCount= true, computerCount = false];
} else if (playerSelection === "paper" && computerSelection === "scissors"){
    results.textContent="You Lose! Scissors beats Paper!";
    return [playerCount = false, computerCount = true];
} else if (playerSelection === "scissors" && computerSelection === "paper"){
    results.textContent="You Win! Scissors beats Paper!";
    return [playerCount = true, computerCount = false];
} else {
    results.textContent="You Lose! Rock beats Scissors!";
    return [playerCount = false, computerCount = true];
}}


function result() {
    const scoreText = document.createElement('div');
    scoreText.classList.add('scoreText');
    scoreText.textContent = 'Current score: Player- ' + playerScore + " Computer- "+ computerScore;
    results.appendChild(scoreText);
}


function score() {
    if (playerCount && !computerCount) {
        playerScore++;
        result();
    } else if (!playerCount && computerCount) {
        computerScore++;
        result();
    } else {
        result();
    }
    if (computerScore === 5 || playerScore === 5 && computerScore>playerScore) {
        result();
        results.textContent="End of the game, you lost!!" ;
    } else if (computerScore === 5 || playerScore === 5 && computerScore<playerScore){
        result();
        results.textContent="End of the game, you win!!" ;
    }
}

const buttonPaper = document.getElementById("paper");
const buttonRock = document.getElementById("rock");
const buttonScissors= document.getElementById("scissors");

paperGame = buttonPaper.addEventListener("click", function() {
    playerChoice = "paper";
    gameRound(playerChoice,getComputerChoice());
    score();
});
rockGame = buttonRock.addEventListener("click", function() {
    playerChoice = "rock";
    gameRound(playerChoice,getComputerChoice());
    score();
});
scissorsGame = buttonScissors.addEventListener("click", function() {
    playerChoice = "scissors";
    gameRound(playerChoice,getComputerChoice());
    score();
});