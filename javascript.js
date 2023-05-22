const text_display = document.getElementById('text_display');
const player_score_display = document.getElementById('player_score');
const computer_score_display = document.getElementById('computer_score');

let player_score = 0;
let computer_score = 0;

const new_game_button = document.getElementById("new_game");
const game_buttons = document.getElementById("game_buttons");

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


// reset all using newGame function
newGame();

// getComputerChoice randomly returns "Rock", "Paper" or "Scissors"
// Function itself takes no arguments
function getComputerChoice() {
    // return random integer between 0 and 2  
    let rand = Math.floor(Math.random() * 3);
    let choice = "";
    // then set choice based on result
    if (rand === 0) {
        choice = "rock";
    }
    else if (rand == 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    // return the choice
    return choice;
}


// PlayRound plays a single round of Rock Paper Scissors
// It takes two parameters (playerSelection, computerSelection) then return a string that declares the winner of the round: 
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


// game function
function game(choice, computer) {
    // display result of PlayRound choice
    let text = playRound(choice, computer);
    // if either score is 5 it's game_over()
    if (player_score == 5 || computer_score == 5) {
        gameOver();
    }
    else {
        text_display.textContent = text;
        rounds_played +=1;
    }
    updateUI();
}


function updateUI() {
    // display the scores
    player_score_display.textContent = "Your Score: " + player_score;
    computer_score_display.textContent = "The Computer's Score: " + computer_score;
}


function gameOver() {
    // display appropriate win message
    if (player_score == 5) {
        text_display.textContent = "You won!";
    }
    else if (computer_score == 5) {
        text_display.textContent = "The computer won :(";
    }
    // hide game buttons
    game_buttons.style.display = "none";
    // show new game button
    new_game_button.style.display = "block";
    updateUI();
}


function newGame() {
    // show game buttons
    game_buttons.style.display = "block";
    // hide new game button
    new_game_button.style.display = "none";
    // reset counters
    player_score = 0;
    computer_score = 0;
    // display starting text
    text_display.textContent = "First to five wins ...";
    updateUI();
}


