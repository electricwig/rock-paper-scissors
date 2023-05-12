// Write a function called getComputerChoice that randomly returns "Rock", "Paper" or "Scissors"
// Function itself takes no arguments
function getComputerChoice() {
    // return random integer between 0 and 2  
    let rand = Math.floor(Math.random() * 3);
    let choice = "";
    // then set choice based on result
    // note: making computer choices lowercase here so they are easily comparable with playerChoice.toLowerCase()
    if (rand === 0) {
        choice = "rock";
    }
    else if (rand == 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    // console.log(choice);
    // return the choice
    return choice;
}


// Now I will write a function to handle player input
function getPlayerChoice() {
    let playerChoice = prompt("Make your choice: ");
    return playerChoice;
    }


// Write a function that plays a single round of Rock Paper Scissors
// The function should take two parameters (playerSelection, computerSelection) then return a string that declares the winner of the round: 
// "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)
function playRound(playerSelection, computerSelection) {
    // Make player's choice case-insensitive by converting to lowercase
    playerSelection = playerSelection.toLowerCase();
    // Now that we have the selections, time to compare ... 
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === computerSelection) {
        return "The computer also chose " + computerSelection + "! It's a draw";
    }
}



function game() {
    // Might as well clear the console each time
    console.clear();
    // Using the for loop from FizzBuzz, although tbh it's very familiar from CS50x/C
    for (let i = 0; i < 5; i++) {
        // This is working so far, i.e. it's choosing a different result each time
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        // Logging the output to check
        console.log(playRound(playerSelection, computerSelection));
        // console.log(playerSelection);
    }
}









// // Now a game function to play five rounds
// function game() {
//     let computerSelection = getComputerChoice();
//     // Ask for player choice
//     let playerSelection = getPlayerChoice();

//     console.log(playRound(playerSelection, computerSelection));
// }
