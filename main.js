console.log("Hello, World!");
let humanScore = 0, computerScore = 0;

// Function to get choice from the computer
function getComputerChoice() {
    let number = Math.random(0, 1);
    if (number <= 0.33) {
        choice = "Rock";
        console.log(choice);
    }
    else if (number <= 0.66) {
        choice = "Paper";
        console.log(choice);
    }
    else {
        choice = "Scissors";
        console.log(choice);
    }
}
getComputerChoice();

// Function to get User's Input
function getHumanChoice() {
    let array = ["rock", "paper", "scissors"];
    let choice = prompt("Enter your choice (rock or paper or scissors): ");
    choice = choice.toLowerCase();
    if (choice == array[0]) {
        choice = "Rock";
        console.log(choice);
    }
    else if (choice == array[1]) {
        choice = "Paper";
        console.log(choice);
    }
    else if (choice == array[2]) {
        choice = "Scissors";
        console.log(choice);
    }
    else {
        getHumanChoice();
    }
}
getHumanChoice();