let humanScore = 0;
let computerScore = 0;
let computerChoice = ""; 
let humanChoice = "";

// Calls the function 5 times
for (i = 0; i < 5; i ++) {
    getHumanChoice();
}

// Function to get User's Input
function getHumanChoice() {
    let array = ["rock", "paper", "scissors"];
    let choice = prompt("Enter your choice (rock or paper or scissors): ");
    choice = choice.toLowerCase();
    if (choice == array[0] || choice == "r") {
        humanChoice = "Rock";
    }
    else if (choice == array[1] || choice == "p") {
        humanChoice = "Paper";
    }
    else if (choice == array[2] || choice == "s") {
        humanChoice = "Scissors";
    }
    else {
        getHumanChoice();
    }
    console.log(humanChoice);
    getComputerChoice();
}

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
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
}

// Function to return scoreboard
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("Draw! Play Again.")
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("Draw! Play Again.")
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beat Paper.")
        computerScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beat Paper.")
        humanScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Draw! Play Again.")
    }
}

// Prints Score
console.log("Score: ");
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);