console.log("Hello, World!");
let humanScore = 0;
computerScore = 0;
let computerChoice = ""; 
let humanChoice = "";

// Function to get User's Input
function getHumanChoice() {
    let array = ["rock", "paper", "scissors"];
    let choice = prompt("Enter your choice (rock or paper or scissors): ");
    choice = choice.toLowerCase();
    if (choice == array[0]) {
        humanChoice = "Rock";
    }
    else if (choice == array[1]) {
        humanChoice = "Paper";
    }
    else if (choice == array[2]) {
        humanChoice = "Scissors";
    }
    else {
        getHumanChoice();
    }
}
getHumanChoice();
console.log(humanChoice);

// Function to get choice from the computer
function getComputerChoice() {
    let number = Math.random(0, 1);
    if (number <= 0.33) {
        computerChoice = "Rock";
    }
    else if (number <= 0.66) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
}
getComputerChoice();
console.log(computerChoice);