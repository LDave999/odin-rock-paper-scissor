function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock";
    }
    else if (randomNumber < 2/3) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}   

function getHumanChoice() {
    let humanChoice = prompt("Rock/Paper/Scissors?").toLowerCase();

    if (humanChoice === "rock") {
        return "Rock";
    }
    else if (humanChoice === "paper") {
        return "Paper";
    }
    else if (humanChoice === "scissors") {
        return "Scissors";
    }
    else {
        return "Invalid Input";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid Input") {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors");
        return;
    }

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a draw!");
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock");
        return computerScore++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You won! Rock beats Scissors");
        return humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You won! Paper beats Rock");
        return humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a draw!");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Rock");
        return computerScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors");
        return computerScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You won! Scissors beats Papers");
        return humanScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("It's a draw!");
    }
}


for (let x = 1; x <= 5; ) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === "Invalid Input") {
        console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
        continue;
    }
    
    playRound(humanChoice, computerChoice);
    console.log(`Your Score: ${humanScore}, Computer's Score: ${computerScore}`);
    x++;
} 

