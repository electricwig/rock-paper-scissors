// Write a function called getComputerChoice that randomly returns "Rock", "Paper" or "Scissors"

// Declare our variable to store the choice outside of the function
let choice;

// Function itself takes no arguments
function getComputerChoice() {
    // return random integer between 0 and 2  
    let rand = Math.floor(Math.random() * 3);
    // then set choice based on result
    if (rand === 0) {
        choice = "Rock";
    }
    else if (rand == 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    // display as an alert temporarily to check its working
    alert("Computer chose ... " + choice);
    // return the choice
    return choice;
}
