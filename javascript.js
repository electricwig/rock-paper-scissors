const text_display = document.getElementById('text_display');
const player_score_display = document.getElementById('player_score');
const computer_score_display = document.getElementById('computer_score');

let player_score = 0;
let computer_score = 0;
let rounds_played = 0;


// Add a 'button click' event listener to our Rock, Paper and Scissors buttons
// get all buttons by id using querySelectorAll
const choices = document.querySelectorAll('#btn');
// then go through each using ForEach
choices.forEach((choices) => {
    // adding an event listener to each one
    choices.addEventListener('click', () => {
        // get the player's choice via button's text
        let choice = choices.innerText;
        let computer = getComputerChoice();
        // then call our updated game function
        game(choice, computer);
    });
});


updateUI();


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


// Now I will write an extra function to handle player input
function getPlayerChoice() {
    // Ask player for their choice - note how easy this is, now that it's no longer wrapped in ParseInt()
    let playerChoice = prompt("Make your choice: ");
    // return the answer
    return playerChoice;
    }


// Write a function that plays a single round of Rock Paper Scissors
// The function should take two parameters (playerSelection, computerSelection) then return a string that declares the winner of the round: 
// "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)
function playRound(playerSelection, computerSelection) {
    // Make player's choice case-insensitive by converting to lowercase
    playerSelection = playerSelection.toLowerCase();
    // Now that we have the selections, time to compare ... Remembering to compare the LowerCase versions(!)
    if (playerSelection === "rock" && computerSelection === "paper") {
        computer_score +=1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        player_score +=1;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        player_score +=1;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_score +=1;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        player_score +=1;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_score +=1;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === computerSelection) {
        return "The computer also chose " + computerSelection + "! It's a draw";
    }
}


// Finally the game function itself - which for now is called via a button in my html
function game(choice, computer) {
    // Use a for loop to play five rounds - very familiar from CS50x/C
    // for (let i = 0; i < 5; i++) {
        // Note to self: is this the correct way and place to be declaring variables? Inside the function?
        text_display.textContent = playRound(choice, computer);
        rounds_played +=1;
        updateUI();
    // }
}


// Seperate the UI updates
function updateUI() {
    // Set UI elements, based on rounds and scores
    // Reset starting message if rounds played is zero
    if (rounds_played == 0) {
        text_display.textContent = "Make your selection ...";
    }

    player_score_display.textContent = "Your Score: " + player_score;
    computer_score_display.textContent = "The Computer's Score: " + computer_score;
}

