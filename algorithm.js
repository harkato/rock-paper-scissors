function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    randomNumber = getRandomIntInclusive();
    if (randomNumber == 1) {
        return "Rock";
} else if (randomNumber == 2) {
    return "Paper";
} else {
    return "Scissors";
}
}

function gameRound(playerSelection, computerSelection) {
    
}
console.log(getComputerChoice())